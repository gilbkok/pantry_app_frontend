import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { recipes } from '../Models/recipes';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipedetails',
  templateUrl: './recipedetails.component.html',
  styleUrls: ['./recipedetails.component.css']
})
export class RecipedetailsComponent implements OnInit {
  detailForm!:FormGroup;
  itemByRecipeList!:any;

  constructor(
    private formbuilder:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public tabRecipeList:any,
    private dialogref:MatDialogRef<RecipedetailsComponent>,
    private RS:RecipeService,

  ) { }

  ngOnInit(): void {
    this.getRecipeItem();
    this.detailForm=this.formbuilder.group(
      {
        rid:[],
        rName:[],
        detailItem:this.formbuilder.array([]),
      });
      if (this.tabRecipeList){
        this.detailForm.controls['rid'].setValue(this.tabRecipeList.rid)
        this.detailForm.controls['rName'].setValue(this.tabRecipeList.rName)
        console.log(this.tabRecipeList)}
  }
  getRecipeItem(){
    this.RS.getRecipeItems(this.tabRecipeList.rid).subscribe(
      {
        next:(res=>{
          this.itemByRecipeList=res;
          console.log(this.itemByRecipeList)
        })
  
        
      }
    )
  }

}
