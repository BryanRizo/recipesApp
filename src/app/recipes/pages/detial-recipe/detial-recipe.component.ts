import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { RecipesInterface } from '../../interface/recipes.interface';
import { RecipesService } from '../../services/service.service';

@Component({
  selector: 'app-detial-recipe',
  templateUrl: './detial-recipe.component.html',
  styleUrls: ['./detial-recipe.component.scss']
})
export class DetialRecipeComponent implements OnInit{

  constructor(
    private _activedRouted: ActivatedRoute,
    private _services: RecipesService
  ){}

  ngOnInit(): void {
    this._activedRouted.params
    .pipe(
      switchMap( async (param) => this._services.searchRecipeForIndex(param['id'])),
      tap()
    ).subscribe( recipe => this.recipe = recipe);
  }

  recipe!: RecipesInterface;


}
