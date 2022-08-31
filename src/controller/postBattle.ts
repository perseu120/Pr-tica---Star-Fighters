import { Request, Response } from "express";

export default async function postBattle(req: Request, res: Response){
    const firstUser: string = req.body.firstUser;
    const secondUser: string = req.body.secondUser;
    

}