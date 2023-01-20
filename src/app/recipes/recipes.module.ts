import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddRecipesComponent } from './pages/add-recipes/add-recipes.component';
import { ViewRecipesComponent } from './pages/view-recipes/view-recipes.component';
import { DetialRecipeComponent } from './pages/detial-recipe/detial-recipe.component';
import { CardFoodComponent } from './components/card-food/card-food.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { SearchFoodComponent } from './components/search-food/search-food.component';
import { NoRecipeMessageComponent } from './components/no-recipe-message/no-recipe-message.component';
import { JumbotronFoodComponent } from './components/jumbotron-food/jumbotron-food.component';
import { TableCheckComponent } from './components/table-check/table-check.component';

@NgModule({
  declarations: [
    AddRecipesComponent,
    ViewRecipesComponent,
    DetialRecipeComponent,
    CardFoodComponent,
    SearchFoodComponent,
    NoRecipeMessageComponent,
    JumbotronFoodComponent,
    TableCheckComponent
  ],
  exports:[
    AddRecipesComponent,
    ViewRecipesComponent,
    DetialRecipeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ]
})
export class PagesModule { }
