import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pantryItems } from '../Models/pantryItems';
import { users } from '../Models/Users';

@Injectable({
  providedIn: 'root'
})
export class PantryService {

baseUrl='https://localhost:7005/pantryItem'

  constructor(private http:HttpClient) { }

  getAllItems():Observable<pantryItems[]>{
    return this.http.get<pantryItems[]>(this.baseUrl);
        }

  getItemById(id:number):Observable<pantryItems> {
          return this.http.get<pantryItems>(this.baseUrl + '/' + id)
        }

  AddItem(item:pantryItems):Observable<pantryItems>{
          return this.http.post<pantryItems>(this.baseUrl,item)
  }
  updateItem(pantryItems:pantryItems):Observable<pantryItems>{
    return this.http.put<pantryItems>(this.baseUrl +'/' + pantryItems.pid,pantryItems)
 }

 deleteItem(id:number):Observable<pantryItems>{
  return this.http.delete<pantryItems>(this.baseUrl + '/' + id)
}
}
