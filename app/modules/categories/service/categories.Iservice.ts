import catergoryModel from "../../../../config/database/model/catergory";
import { CreateCategoryValidator, GetCategoriesValidator, MoveCategoryValidator } from "../validation";

interface ICategoriesService {
    createCategory(body: CreateCategoryValidator): Promise<catergoryModel>;
    removeCategory(body: GetCategoriesValidator): Promise<catergoryModel>;
    moveSubtree(id: string, body: MoveCategoryValidator): Promise<catergoryModel>;
    getCategorySubtree(body: GetCategoriesValidator): Promise<catergoryModel[]>;
}

export default ICategoriesService;