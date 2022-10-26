import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { recipes } from '../Models/recipes';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-action',
  templateUrl: './recipe-action.component.html',
  styleUrls: ['./recipe-action.component.css']
})
export class RecipeActionComponent implements OnInit {
recipeForm!:FormGroup;
  constructor(
    private formbuilder:FormBuilder,
    private recipeService:RecipeService,
    @Inject(MAT_DIALOG_DATA) public editRecipe:recipes

  ) { }

  ngOnInit(): void {
    this.AllRecipes();
    this.recipeForm=this.formbuilder.group(
      {
        rid:[],
        rName:[],
        rImage:[],
        rSteps:[],
        recipes:[]
        
      })

    console.log(this.editRecipe)
    if(this.editRecipe){
      this.recipeForm.controls['rid'].setValue(this.editRecipe.rid);
      this.recipeForm.controls['rName'].setValue(this.editRecipe.rName);
      this.recipeForm.controls['rSteps'].setValue(this.editRecipe.rSteps);

    }
  }
  AllRecipes():void{
    this.recipeService.getAllRecipes().subscribe(
      res=>{});
    }
 OnAddRecipe(){
console.log(this.recipeForm.value)
this.recipeService.AddRecipe(this.recipeForm.value).subscribe(
  {
    next:()=>{
      this.AllRecipes();
      alert("Recipe Added Successfully!");
    },
    error:()=>{
      alert("Something went wrong!")
    }
  });
 }
 OnEditRecipe(){
  this.recipeService.updateRecipe(this.recipeForm.value).subscribe(
    {
     
      next:()=>{
        this.AllRecipes();
        alert("Item Updated Successfully!");
      },
      error:()=>{
        alert("Something went wrong!")
      }
    });
 }
}


