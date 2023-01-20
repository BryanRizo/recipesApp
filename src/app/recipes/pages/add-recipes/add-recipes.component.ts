import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { RecipesService } from '../../services/service.service';
import { RecipesInterface } from '../../interface/recipes.interface';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';


@Component({
  selector: 'app-add-recipes',
  templateUrl: './add-recipes.component.html',
  styleUrls: ['./add-recipes.component.scss']
})
export class AddRecipesComponent implements OnInit{

  constructor(
    private _formBuilder: FormBuilder,
    private _service: RecipesService,
    private _toastr: ToastrService,
    private _router:Router
  ) { }

  ngOnInit(): void {
    this.addIngredients();
  }

  formRecipe = this._formBuilder.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    image: ['', [Validators.required]],
    ingredients: this._formBuilder.array([], [Validators.required])
  });

  get ingredients(): FormArray{
    return this.formRecipe.get('ingredients') as FormArray;
  }

  submit(): void{
    
    if(this.formRecipe.valid){
      this._service.saveRecipes(this.formRecipe.value as RecipesInterface);
      this.succesToast('Exito :)', 'Se ha guardado una nueva receta')
      this._router.navigate(['']);
      return
    }
    this.errorToast('Error :(', 'Verifique que los campos tengan datos')
  }

  addIngredients(): void{
    const ingredientsFormGrupo = this._formBuilder.group({
      nameIngredient: ['', [Validators.required]],
      status: [false, [Validators.required]]
    });

    this.ingredients.push(ingredientsFormGrupo);
  }

  removeIngredients(index: number): void{
    this.ingredients.removeAt(index);
  }

  succesToast(title: string, description: string): void{
    this._toastr.success( description, title,{});
  }

  errorToast(title: string, description: string){
    this._toastr.error( description, title,{});
  }
}
