import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/service.service';
import { RecipesInterface } from '../../interface/recipes.interface';

@Component({
  selector: 'app-view-recipes',
  templateUrl: './view-recipes.component.html'
})
export class ViewRecipesComponent implements OnInit {

  constructor(private _services: RecipesService){}

  ngOnInit(): void {
    this.allData();
  }

  recipesFood: RecipesInterface[] = [];
  showCard: boolean = false;

  get recipePrincipal(): RecipesInterface{
    return this._services.Recipes[0];
  }

  filterRecipesForName(title: string): void{
    this.recipesFood = this._services.filterRecipesForName(title);
  }

  allData(): void{
    this.recipesFood = this._services.Recipes;
    if(this.recipesFood.length){
      this.showCard = true;
    }
  }

}
