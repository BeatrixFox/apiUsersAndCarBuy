import { Request, Response, NextFunction } from "express";

const getUSerMiddleware = async (req: Request, res : Response, next: NextFunction) =>{
    try {
        
        
        return next();
    } catch (e: any) {
        return res.status(400).json({error: e.message })
    }
}
export default getUSerMiddleware;