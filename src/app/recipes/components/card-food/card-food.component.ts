import { Component, Input } from '@angular/core';
import { RecipesInterface } from '../../interface/recipes.interface';

@Component({
  selector: 'app-card-food',
  templateUrl: './card-food.component.html',
  styleUrls: ['./card-food.component.scss']
})
export class CardFoodComponent {
  @Input() RecipesFood: RecipesInterface[] = [];
}
