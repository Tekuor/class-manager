import * as fs from "fs";
import * as path from "path";
import * as csv from "fast-csv";
import StudentService from "../services/students";
import ClassService from "../services/classes";
import UserService from "../services/users";
import { Types } from "mongoose";

export async function csvToJson(fileName: string) {
  try {
    fs.createReadStream(path.resolve(__dirname, "../../tmp", fileName))
      .pipe(csv.parse({ headers: true }))
      .on("error", (error) => console.error(error))
      .on("data", (row) => {
        ClassService.getClassBy({ name: row.className }).then((classData) => {
          if (classData) {
            StudentService.createStudent({
              firstName: row.firstName,
              lastName: row.lastName,
              dateOfBirth: row.dateOfBirth,
              classId: classData._id,
            }).then((studentData) => {
              UserService.createUser({
                email: row.email,
                role: "student",
                status: "pendingClaim",
                password: new Types.ObjectId().toString(),
                accountId: studentData._id,
              });
            });
          }
        });
      })
      .on("end", () => {
        fs.unlink(path.resolve(__dirname, "../../tmp", fileName), () => {});
      });
  } catch (error: any) {
    throw new Error("Csv file could not be formatted to json");
  }
}
