type CategoriesQueries = {
    createCategory: string;
    getCategory: string;
    getCategories: string;
    updateCategory: string;
    deleteCategory: string;
};

export const categoriesQueries: CategoriesQueries = {
    createCategory: `
        INSERT INTO categories(
            name, 
            parent_id
        ) VALUES($1, $2) RETURNING 
         id,
         name, 
         parent_id as "parentId"
    `,
    getCategory: `
        SELECT * FROM categories WHERE id = $1
    `,
    getCategories: `SELECT * FROM categories WHERE parent_id = $1`,
    updateCategory: `
        UPDATE categories SET parent_id = $1 WHERE id = $2 
        RETURNING 
            id, 
            name, 
            parent_id as "parentId";
    `,
    deleteCategory: `
        DELETE FROM categories WHERE id = $1 OR parent_id = $1 RETURNING *
    `
};