import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PantryComponent } from './main/pantry/pantry.component';
import { ReceipesComponent } from './main/receipes/receipes.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { PantryActionComponent } from './pantry-action/pantry-action.component'
import {MatDialogModule} from '@angular/material/dialog';
import { RecipeActionComponent } from './recipe-action/recipe-action.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RecipedetailsComponent } from './recipedetails/recipedetails.component';
import {MatCardModule} from '@angular/material/card';
import { RecipesStepsComponent } from './recipes-steps/recipes-steps.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PantryComponent,
    ReceipesComponent,
    LoginComponent,
    PantryActionComponent,
    RecipeActionComponent,
    RecipeItemComponent,
    RecipedetailsComponent,
    RecipesStepsComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonToggleModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatDialogModule,
    MatCheckboxModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
