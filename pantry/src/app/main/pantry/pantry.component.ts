import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PantryService } from 'src/app/services/pantry.service';
import { MatDialog } from '@angular/material/dialog';
import { PantryActionComponent } from 'src/app/pantry-action/pantry-action.component';
import { Router } from '@angular/router';
import { AutofillMonitor } from '@angular/cdk/text-field';

@Component({
  selector: 'app-pantry',
  templateUrl: './pantry.component.html',
  styleUrls: ['./pantry.component.css']
})
export class PantryComponent implements OnInit {
  pantryForm!:FormGroup;
  ItemList!:any;


  constructor(private formbuilder:FormBuilder,
    private pantryService:PantryService,
    private dialog:MatDialog,
    private router:Router,
    ) 
  { }

  ngOnInit(): void {
    this.AllItems();
    
  }
  
  OnaddItem(){
    console.log(this.pantryForm.value)
    this.pantryService.AddItem(this.pantryForm.value).subscribe(
      {
        next:(res)=>{
          alert("Item Added Successfully!");
          
        },
        error:()=>{
          alert("Something went wrong!")
        }
      });
  }
 AllItems(){
  this.pantryService.getAllItems().subscribe(
    res=>{
      this.ItemList=res;
      console.log(this.ItemList)
    });
 }
 itemActionAdd(): void {
    
  this.dialog.open(PantryActionComponent,
    {id:'dialog'}
    )}

itemOtherAction(row:any): void {
  this.dialog.open(PantryActionComponent,
    {id:'dialog',
    data:row}
    )}
onDelete(pid:any){
  this.pantryService.deleteItem(pid).subscribe(
    {
      next:()=> {
        this.AllItems();
        alert("Item deleted successfully")
      },
      error:()=>{
        alert("something went wrong")
      }
    });
}

}
