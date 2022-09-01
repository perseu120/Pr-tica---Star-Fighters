import { Router } from "express";
import { postBattle, getRanking } from "../controller/controllerBattle";

const starFighters = Router();

starFighters.post("/battle", postBattle);
starFighters.get("/ranking", getRanking);

export default starFighters;