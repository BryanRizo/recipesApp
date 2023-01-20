import { ingredientInterface } from "./ingredient.interface";

export interface RecipesInterface {
    title: string;
    description: string;
    image: string;
    ingredients: ingredientInterface[];
}