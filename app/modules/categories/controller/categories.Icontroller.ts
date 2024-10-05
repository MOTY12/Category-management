import { Request, Response } from "express";

interface ICategoriesController {
    createCategory(req: Request, res: Response): Promise<object>;
    removeCategory(req: Request, res: Response): Promise<object>;
    getCategorySubtree(req: Request, res: Response): Promise<object>;
    moveCategory(req: Request, res: Response): Promise<object>;
}

export default ICategoriesController