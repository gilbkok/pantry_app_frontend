import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { recipes } from '../Models/recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  
  baseUrl='https://localhost:7005/recipes'
  baseUrl2='https://localhost:7005/addItems?idRecipe='
  baseUrl3='https://localhost:7005/recipes/GetRecipeItems?rid='
  baseUrl4='https://localhost:7005/recipes?id='

  constructor(
    private http:HttpClient,
  ) { }
  getAllRecipes():Observable<recipes[]>{
    return this.http.get<recipes[]>(this.baseUrl)
  }
AddRecipe(item:recipes):Observable<recipes>{
    return this.http.post<recipes>(this.baseUrl,item)
}
 addItemToRecipe(rid:any,list:[]):Observable<[]>{
  return this.http.post<[]>(this.baseUrl2 + rid,list)
 }

getRecipeItems(rid:any):Observable<[]>{
  return this.http.get<[]>(this.baseUrl3 + rid)}

updateRecipe(recipes:recipes):Observable<recipes>{
    return this.http.put<recipes>(this.baseUrl4 + recipes.rid,recipes)
  }

deleteRecipe(id:number):Observable<recipes>{
    return this.http.delete<recipes>(this.baseUrl + '/' + id)
  }
}
