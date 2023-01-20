import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddRecipesComponent } from './recipes/pages/add-recipes/add-recipes.component';
import { DetialRecipeComponent } from './recipes/pages/detial-recipe/detial-recipe.component';
import { ViewRecipesComponent } from './recipes/pages/view-recipes/view-recipes.component';

const routes: Routes = [
  {
    path: '',
    component: ViewRecipesComponent,
    pathMatch: 'full'
  },
  {
    path: 'addrecipes',
    component: AddRecipesComponent
  },
  {
    path:'detail/recipes/:id',
    component: DetialRecipeComponent
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
