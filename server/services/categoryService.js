import { BadRequestError } from "../middleware/errors/errors";
import { Category } from "../models/category.js";

async function FindCategoryByName(name) {
    let category = Category.findOne(name);
    if (!category) {
        throw new BadRequestError(
            "Category not found, category not valid category."
        );
    }
    return category;
}

export { FindCategoryByName };
