import express, { Request, Response } from "express";
import __singleResource__(pascalCase)Service from "../services/__resource__(kebabCase)";

const router = express.Router();

const create__singleResource__(pascalCase) = async (request: Request, response: Response) => {
  try {
    const {} = request.body;
    const data = await __singleResource__(pascalCase)Service.create__singleResource__(pascalCase)({});
    response.status(200).send(data);
  } catch (error) {
    response.status(400).send(error);
  }
};

router.post("/__resource__(kebabCase)", create__singleResource__(pascalCase));

const update__singleResource__(pascalCase) = async (request: Request, response: Response) => {
  try {
    const body = request.body;
    const { __identifier__ } = request.params;
    const data = await __singleResource__(pascalCase)Service.update__singleResource__(pascalCase)(body, __identifier__);
    response.status(200).send(data);
  } catch (error) {
    response.status(400).send(error);
  }
};

router.put("/__resource__(kebabCase)/:__identifier__", update__singleResource__(pascalCase));

const get__resource__(pascalCase) = async (request: Request, response: Response) => {
  try {
    const data = await __singleResource__(pascalCase)Service.get__resource__(pascalCase)({});
    response.status(200).send(data);
  } catch (error) {
    response.status(400).send(error);
  }
};

router.get("/__resource__(kebabCase)", get__resource__(pascalCase));

const get__singleResource__(pascalCase) = async (request: Request, response: Response) => {
  try {
    const { __identifier__ } = request.params;
    const data = await __singleResource__(pascalCase)Service.get__singleResource__(pascalCase)(__identifier__);
    response.status(200).send(data);
  } catch (error) {
    response.status(400).send(error);
  }
};

router.get("/__resource__(kebabCase)/:__identifier__", get__singleResource__(pascalCase));

const delete__singleResource__(pascalCase) = async (request: Request, response: Response) => {
  try {
    const { __identifier__ } = request.params;
    const data = await __singleResource__(pascalCase)Service.delete__singleResource__(pascalCase)(__identifier__);
    response.status(200).send(data);
  } catch (error) {
    response.status(400).send(error);
  }
};

router.delete("/__resource__(kebabCase)/:__identifier__", delete__singleResource__(pascalCase));

export default router;
