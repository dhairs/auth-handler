import { Request, Response } from "express";

function authHandler(req: Request, res: Response) {
  console.log(req.cookies);
  res.json({ message: "Hello World!" });
}
export default authHandler;
