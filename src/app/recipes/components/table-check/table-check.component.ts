import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ingredientInterface } from '../../interface/ingredient.interface';

@Component({
  selector: 'app-table-check',
  templateUrl: './table-check.component.html',
  styleUrls: ['./table-check.component.scss']
})
export class TableCheckComponent{

  @Input() ingredients: ingredientInterface[] = [];

  changeStatus(): void{

  }
}
