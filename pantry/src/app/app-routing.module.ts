import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { PantryComponent } from './main/pantry/pantry.component';
import { ReceipesComponent as ReceipesComponent } from './main/receipes/receipes.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';

const routes: Routes = [
  {
    path:'main',
    component:MainComponent,
    children:[
      
      {
        path:'pantry',
        component:PantryComponent
      },
      {
        path:'recipe',
        component:ReceipesComponent
      },
      

    ],
  },
  {
    path:'login',
    component:LoginComponent
  },
  {path: '', component: LoginComponent },
  {path:'recipe-item', component:RecipeItemComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
