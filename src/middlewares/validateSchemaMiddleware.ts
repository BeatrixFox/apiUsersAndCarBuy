import { Request, Response, NextFunction } from "express";
import { AnyObjectSchema } from "yup";

const validateSchema =
  (schema: AnyObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const bodyRequestJson = req.body;
      req.body.validated = await schema.validate(bodyRequestJson);
      return next();
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  };
export default validateSchema;
