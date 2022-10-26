import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import{HttpClient} from '@angular/common/http';
import { PantryService } from 'src/app/services/pantry.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Data } from '@angular/router';
import { pantryItems } from '../Models/pantryItems';
@Component({
  selector: 'app-pantry-action',
  templateUrl: './pantry-action.component.html',
  styleUrls: ['./pantry-action.component.css']
})
export class PantryActionComponent implements OnInit {
  pantryForm!:FormGroup;

  constructor(
    private formbuilder:FormBuilder,
    private pantryService:PantryService,
    @Inject(MAT_DIALOG_DATA) public editItem:pantryItems
  ) { }


  ngOnInit(): void {
    this.AllItems();
    this.pantryForm=this.formbuilder.group(
      { pid:[],
        iName:[],
        weight:[],
        tCalories:[],
        image:[],
      })

      console.log(this.editItem)
      if(this.editItem){
        this.pantryForm.controls['pid'].setValue(this.editItem.pid);
        this.pantryForm.controls['iName'].setValue(this.editItem.iName);
        this.pantryForm.controls['weight'].setValue(this.editItem.weight);
        this.pantryForm.controls['tCalories'].setValue(this.editItem.tCalories);
        
      }
  }

  AllItems(){
    this.pantryService.getAllItems().subscribe(
      res=>{});
  }

  OnaddItem(){
    console.log(this.pantryForm.value)
    this.pantryService.AddItem(this.pantryForm.value).subscribe(
      {
        next:()=>{
          this.AllItems();
          alert("Item Added Successfully!");
          
        },
        error:()=>{
          alert("Something went wrong!")
        }
      });
  }

onEditItem(){
  this.AllItems();
  this.pantryService.updateItem(this.pantryForm.value).subscribe(
    {
      next:()=>{
        alert("Item updated successfully!");
      },
      error:()=>{
        alert("Something went wrong!")
      }
    });
}


}
