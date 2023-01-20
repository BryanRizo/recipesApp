import { Injectable } from '@angular/core';
import { RecipesInterface } from '../interface/recipes.interface';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor() { 
    this._recipes = JSON.parse(localStorage.getItem('RecipesHistory')!) || [];
  }

  private _recipes: RecipesInterface[] = [];

  get Recipes(): RecipesInterface[]{
    return [...this._recipes];
  }

  saveRecipes(recipe: RecipesInterface ): void{
    this._recipes.unshift(recipe);
    localStorage.setItem('RecipesHistory', JSON.stringify(this.Recipes));
  }

  filterRecipesForName(title: string): RecipesInterface[]{
    return this._recipes.filter( ingredient => ingredient.title.toLowerCase().includes(title.toLowerCase()));
  }

  searchRecipeForIndex(index: number): RecipesInterface{
    return this.Recipes[index];
  }
}
