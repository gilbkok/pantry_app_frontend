import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { filter, map, pipe } from 'rxjs';

import { users } from '../Models/Users';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm!:FormGroup;
User!:users[];


  constructor(private formbuilder:FormBuilder,
    private userService:UserService,
    private router: Router
   
    ) 
  { }

  ngOnInit(): void {
    
    this.loginForm=this.formbuilder.group
    ({
      firstName:[],
      password:[],
    });
  }


  OnLogin(){
    const firstName=this.loginForm.value.firstName;
    const password=this.loginForm.value.password;
    this.userService.getAllUsers().subscribe(res=>{
      this.User=res.filter((e:any)=>e.firstName == firstName&& e.password == password)
      console.log(this.User)
      if(this.User.length===0){
        
        alert("Login failed")
      }else{
        this.router.navigate(['/main'])
      }   
    })
    
  }
  OnRegister(){
    const firstName=this.loginForm.value.firstName;
    const password=this.loginForm.value.password;
    this.userService.getAllUsers().subscribe(res=>{
      this.User=res.filter((e:any)=>e.firstName == firstName&& e.password == password)
      console.log(this.User)
      if(this.User.length===0){
        this.userService.AddUser(this.loginForm.value).subscribe(res=>{
          alert("registration success") ;
          this.router.navigate(['/main'])
        })
      } 
    })
  }
  
  
}
