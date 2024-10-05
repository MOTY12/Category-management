import express from "express";
import { ValidationMiddleware } from "../../../../utils/helpers/validation/validation.middleware";
import { createCategoryValidator, getCategoriesValidator, moveCategoryValidator } from "../validation";
import categoriesController from "../controller/categories.controller";
import { validate } from "webpack";


const { validateRequest } = ValidationMiddleware;

const Router = express.Router();

Router.post(
    "/create",
    validateRequest(createCategoryValidator),
    categoriesController.createCategory
)

Router.delete(
    "/remove/:id",
    categoriesController.removeCategory
)

Router.put(
    "/move/:id",
    validateRequest(moveCategoryValidator),
    categoriesController.moveCategory
)

Router.get(
    "/getSubtree/:id",
    categoriesController.getCategorySubtree
)

export const categoryRouter = Router;