import express from "express";
import { categoryRouter } from "../../modules/categories/routes";

const appRouter = express.Router();

appRouter.use("/category", categoryRouter);

export const Router = appRouter;
