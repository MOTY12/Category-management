import { Request, Response } from "express";
import logger from "../../../../config/logger";
import ResponseHandler from "../../../../utils/helpers/response.handler";
import ICategoriesService from "../service/categories.Iservice";
import categoriesService from "../service/categories.service";
import ICategoriesController from "./categories.Icontroller";
import { CreateCategoryValidator, GetCategoriesValidator, MoveCategoryValidator } from "../validation";
import { StatusCodes } from "http-status-codes";

class CategoriesController implements ICategoriesController{
    constructor(
        private readonly categoriesService: ICategoriesService,
        private readonly _logger: typeof logger
    ) {}

    createCategory = async(req: Request, res: Response): Promise<object> => {
        try {
            this._logger.info(`********** Category Controller **********: Creating category in CategoryController::createCatergory with body - ${req.body}`);
            
            const response = new ResponseHandler(req, res);
            
            const category = await this.categoriesService.createCategory(req.body as CreateCategoryValidator);

            return response.success({
                message: "Category created successfully!",
                code: StatusCodes.CREATED,
                data: category
            })

        } catch (error) {
            this._logger.error(error);
            throw error;
        }
    }

    removeCategory = async(req: Request, res: Response): Promise<object> => {
        try {
            this._logger.info(`********** Category Controller **********: Removing category in CategoryController::removeCategory with id - ${req.params.id}`);
            
            const response = new ResponseHandler(req, res);
            const category = await this.categoriesService.removeCategory(req.params as GetCategoriesValidator);

            return response.success({
                message: "Category removed successfully!",
                code: StatusCodes.OK,
                data: category
            })

        } catch (error) {
            this._logger.error(error);
            throw error;
        }
    }

    getCategorySubtree = async(req: Request, res: Response): Promise<object> => {
        try {
            this._logger.info(`********** Category Controller **********: Getting category subtree in CategoryController::getCategorySubtree with id - ${req.params.id}`);
            
            const response = new ResponseHandler(req, res);

            const categories = await this.categoriesService.getCategorySubtree(req.params as GetCategoriesValidator);

            return response.success({
                message: "Category subtree fetched successfully!",
                code: StatusCodes.OK,
                data: categories
            })

        } catch (error) {
            this._logger.error(error);
            throw error;
        }
    }

    moveCategory = async(req: Request, res: Response): Promise<object> => {
        try{
            this._logger.info(`********** Category Controller **********: Moving category in CategoryController::moveCategory with id - ${req.params.id} and body - ${req.body}`);

            const response = new ResponseHandler(req, res)

            const category = await this.categoriesService.moveSubtree(req.params.id, req.body as MoveCategoryValidator)

            return response.success({
                message: "Category moved successfully!",
                code: StatusCodes.OK,
                data: category
            }) 
        }catch(error){
            this._logger.error(error);
            throw error;
        }
    }
}

const categoriesController = new CategoriesController(categoriesService, logger);

export default categoriesController;