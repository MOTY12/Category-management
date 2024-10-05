import z from "zod";


export const createCategoryValidator = z.object({
    name: z.string(),
    parentId: z.string().optional()
})

export const getCategoriesValidator = z.object({
    id: z.string()
});

export const moveCategoryValidator = z.object({
    parentId: z.string()
})

export type CreateCategoryValidator = typeof createCategoryValidator._type;
export type GetCategoriesValidator = typeof getCategoriesValidator._type;
export type MoveCategoryValidator = typeof moveCategoryValidator._type;
