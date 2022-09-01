import cors from "cors";
import express from "express";
import starFighters from "./router/router";

const app = express();
app.use(cors());
app.use(express.json());
app.use(starFighters);


export default app;
