import { Component, Input } from '@angular/core';
import { RecipesInterface } from '../../interface/recipes.interface';

@Component({
  selector: 'app-jumbotron-food',
  templateUrl: './jumbotron-food.component.html',
  styles:[
    `
    `
  ]
})
export class JumbotronFoodComponent {
  @Input() recipe!: RecipesInterface;
}
