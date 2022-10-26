import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { users } from '../Models/Users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
baseUrl='https://localhost:7005/Users'

  constructor(private http:HttpClient) { }

  getAllUsers():Observable<users[]>{
    return this.http.get<users[]>(this.baseUrl);
        }

  getUserById(id:string):Observable<users> {
          return this.http.get<users>(this.baseUrl + '/' + id)
        }

  AddUser(user:users):Observable<users>{
          return this.http.post<users>(this.baseUrl,user)
  }
}

