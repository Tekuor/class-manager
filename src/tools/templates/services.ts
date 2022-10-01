// @ts-nocheck
import { Types } from "mongoose";
import { __singleResource__(pascalCase) } from "../../mongoose/models/__resource__(pascalCase)";
import { I__singleResource__(pascalCase) } from "./../../mongoose/models/__resource__(pascalCase)";

class __singleResource__(pascalCase)Service {
  async create__singleResource__(pascalCase)(data: I__singleResource__(pascalCase)) {
    try {
      const response = await __singleResource__(pascalCase).create(data);
      return response;
    } catch (e: any) {
      // throw new Error(e.message);
    }
  }

  async update__singleResource__(pascalCase)(
    data: I__singleResource__(pascalCase),
    id: Types.ObjectId | string
  ) {
    try {
      const response = await __singleResource__(pascalCase).findByIdAndUpdate(id, data);
      return response;
    } catch (e: any) {
      // throw new Error(e.message);
    }
  }

  async get__singleResource__(pascalCase)(id: Types.ObjectId | string) {
    try {
      const response = await __singleResource__(pascalCase).findById(id);
      return response;
    } catch (e: any) {
      // throw new Error(e.message);
    }
  }

  async get__resource__(pascalCase)(query: any) {
    try {
      const response = await __singleResource__(pascalCase).find(query);
      return response;
    } catch (e: any) {
      // throw new Error(e.message);
    }
  }

  async delete__singleResource__(pascalCase)(id: Types.ObjectId | string) {
    try {
      const response = await  __singleResource__(pascalCase).findByIdAndUpdate(id, { isDeleted: true });
      return response;
    } catch (e: any) {
      // throw new Error(e.message);
    }
  }
}

export default new __singleResource__(pascalCase)Service();
