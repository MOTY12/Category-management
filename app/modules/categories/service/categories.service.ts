import { sqlQuest } from "../../../../config/database";
import categoryModel from "../../../../config/database/model/catergory";
import logger from "../../../../config/logger";
import { categoriesQueries } from "../queries";
import { CreateCategoryValidator, GetCategoriesValidator, MoveCategoryValidator } from "../validation";
import ICategoriesService from "./categories.Iservice";
import { SqlQuest } from "@bitreel/sql-quest";



class CategoriesService implements ICategoriesService{
    constructor(
        private readonly sqlQuest: SqlQuest,
        private readonly _logger: typeof logger
    ){}

    createCategory = async (body: CreateCategoryValidator): Promise<categoryModel> => {
        try {
           this._logger.info(`********** Category Service **********: Creating category in CategoryService::createCatergory with body - ${body}`);
           
           const category = await this.sqlQuest.oneOrNone(categoriesQueries.createCategory, [
                body.name, 
                body.parentId
            ]);

            
            this._logger.info(`Category info returned - ${JSON.stringify(category)}`);
            
            return category;
        } catch (error) {
            this._logger.error(error);
            throw error;
        }
    }

    removeCategory = async (body: GetCategoriesValidator): Promise<categoryModel> => {
        try{
            this._logger.info(`********** Category Service **********: Removing category in CategoryService::removeCategory with id - ${body.id}`);

            const category = await this.sqlQuest.oneOrNone(categoriesQueries.deleteCategory, [body.id]);

            this._logger.info(`Category info returned - ${JSON.stringify(category)}`);

            return category;
        }catch(error){
            this._logger.error(error);
            throw error;
        }
    }

    async getCategorySubtree(body: GetCategoriesValidator): Promise<categoryModel[]> {
        try {
            const result = await this.sqlQuest.oneOrNone(categoriesQueries.getCategory, [body.id]);
    
            if (!result) {
                throw new Error(`Category with ID ${body.id} not found.`);
            }
    
            const category = result;
            
            const childrenResult = await this.sqlQuest.manyOrNone(categoriesQueries.getCategories, [body.id]);
    
            category.children = await Promise.all(
                childrenResult.map(async (child: any) => await this.getCategorySubtree({ id: child.id }))
            );
    
            return category;
        } catch (error) {
            this._logger.error(error);
            throw error;
        }
    }
    

    moveSubtree = async (id: string, body: MoveCategoryValidator): Promise<categoryModel> => {
        try{
           
            const category = await this.sqlQuest.oneOrNone(categoriesQueries.updateCategory, [body.parentId, id]);
            return category;
        }catch(error){
            this._logger.error(error);
            throw error;
        }
    }

}

const categoriesService = new CategoriesService(sqlQuest, logger);
export default categoriesService;