import dotenv from "dotenv";

dotenv.config();

const secrectKey = process.env.SECRET_KEY ?? "secret key";
const expiresIn = Number(process.env.EXPIRES_IN) ?? 86400;

export { expiresIn, secrectKey };
