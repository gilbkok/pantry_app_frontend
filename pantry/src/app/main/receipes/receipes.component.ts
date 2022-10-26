import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe.service';
import { MatDialog } from '@angular/material/dialog';
import { RecipeActionComponent } from 'src/app/recipe-action/recipe-action.component';
import { RecipeItemComponent } from 'src/app/recipe-item/recipe-item.component';
import { RecipedetailsComponent } from 'src/app/recipedetails/recipedetails.component';

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrls: ['./receipes.component.css']
})
export class ReceipesComponent implements OnInit {
  recipeForm!:FormGroup;
  recipeList!:any;
  
  constructor(
    private formbuilder:FormBuilder,
    private recipeService:RecipeService,
    private dialog:MatDialog,
  ) { }

  ngOnInit(): void {
   this.AllRecipes();
  }
AllRecipes(){
  this.recipeService.getAllRecipes().subscribe(
    res=>{
      this.recipeList=res;
      console.log(this.recipeList)
    });
  }
recipeActionAdd(){
  this.dialog.open(RecipeActionComponent,
    {id:'dialogRecipe'})
}
recipeOtherAction(row:any):void{
  this.dialog.open(RecipeActionComponent,
    {
      id:'dialog',
      data:row
    })
}
recipeItemAdd(row:any):void{
  this.dialog.open(RecipeItemComponent,
    {
      id:'dialog',
      data:row

    })
}
recipeDetail(row:any):void{
  this.dialog.open(RecipedetailsComponent,
    {data:row}
    )};

onDeleteRecipe(rid:any){
  this.recipeService.deleteRecipe(rid).subscribe(
    {
      next:()=>{
        this.AllRecipes();
        alert("Recipe deleted successfully")
      },
      error:()=>{
        alert("Something went wrong!")
      }
    }
  )
}
}
