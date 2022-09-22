import express, { Request, Response } from "express";
import { __singleResource__(pascalCase), I__singleResource__(pascalCase) } from "./../mongoose/models/__resource__(pascalCase)";

const router = express.Router();

const create__singleResource__(pascalCase) = async (request: Request, response: Response) => {
  try {
    response.status(200).send();
  } catch (error) {
    response.status(400).send(error);
  }
};

router.post("/__resource__(kebabCase)", create__singleResource__(pascalCase));

const update__singleResource__(pascalCase) = async (request: Request, response: Response) => {
  try {
    response.status(200).send();
  } catch (error) {
    response.status(400).send(error);
  }
};

router.put("/__resource__(kebabCase)/:__identifier__", update__singleResource__(pascalCase));

const get__resource__(pascalCase) = async (request: Request, response: Response) => {
  try {
    response.status(200).send();
  } catch (error) {
    response.status(400).send(error);
  }
};

router.get("/__resource__(kebabCase)", get__resource__(pascalCase));

const get__singleResource__(pascalCase) = async (request: Request, response: Response) => {
  try {
    response.status(200).send();
  } catch (error) {
    response.status(400).send(error);
  }
};

router.get("/__resource__(kebabCase)/:__identifier__", get__singleResource__(pascalCase));

const delete__singleResource__(pascalCase) = async (request: Request, response: Response) => {
  try {
    response.status(200).send();
  } catch (error) {
    response.status(400).send(error);
  }
};

router.delete("/__resource__(kebabCase)/:__identifier__", delete__singleResource__(pascalCase));

export default router;
