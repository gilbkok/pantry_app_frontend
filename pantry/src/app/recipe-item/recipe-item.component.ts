import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { pantryItems } from '../Models/pantryItems';
import { recipes } from '../Models/recipes';
import { PantryService } from '../services/pantry.service';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
ItemList!:pantryItems[];
iRecipeForm!:FormGroup;
itemByRecipeList!:[];


  constructor(
    private pantryService:PantryService,
    private RecipeService:RecipeService,
    private formbuilder:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public tabRecipeList:recipes,
    private dialogref:MatDialogRef<RecipeItemComponent>,
  ) { }

  ngOnInit(): void {
 this.getRecipeItem();
 this.getpantryItems();
 this.iRecipeForm= this.formbuilder.group(
  {
    rid:[],
    rName:[],
    item:this.formbuilder.array([]),
  });
  if (this.tabRecipeList){
    this.iRecipeForm.controls['rid'].setValue(this.tabRecipeList.rid)
    this.iRecipeForm.controls['rName'].setValue(this.tabRecipeList.rName)
    console.log(this.tabRecipeList)}
  
}



 getpantryItems(){
  this.pantryService.getAllItems().subscribe(
    {
      next:(res=>{
        this.ItemList=res;
        console.log(this.ItemList)
        
      })
    });
 }
 onCheckboxChange(e: any) {
  const iRecipeList: FormArray = this.iRecipeForm.get('item') as FormArray;
  if (e.target.checked) {
   console.log(e.target.value)
    iRecipeList.push(new FormControl(e.target.value));
    console.log(iRecipeList) 
  }
}
AddItems() {
  console.log(this.iRecipeForm.value.item);
  console.log(this.tabRecipeList.rid);
  this.RecipeService.addItemToRecipe(this.tabRecipeList.rid,this.iRecipeForm.value.item).subscribe(
    {
      next:(res)=>{
        alert("Items Added Successfully!");
        
      },
      error:()=>{
        alert("Something went wrong!")
      }});
}
getRecipeItem(){
  this.RecipeService.getRecipeItems(this.tabRecipeList.rid).subscribe(
    {
      next:(res=>{
        this.itemByRecipeList=res;
        console.log(this.itemByRecipeList)
      })

      
    }
  )
}
}
