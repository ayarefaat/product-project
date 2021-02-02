import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  inputType="password";
  constructor(private _formBuilder:FormBuilder,private _router:Router,private _userService:UserService) { }
  ngOnInit(): void {
    if(this._userService.isLogged()){
      alert("You're already loged in")
      //hna el function de btrg3 ya true ya false lw hwa login htrg3 true 3shan f value fl localstorage
      //wlw hwa mwgod hywdeni ll home
      this._router.navigateByUrl('/')
    }
    this.form=this._formBuilder.group({
      Email:['',[Validators.required,Validators.email,Validators.minLength(5),Validators.maxLength(30)]],
      Password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(18)]]
    });

  }
  login(){
    this._userService.login(this.form.controls['Email'].value)
    // ha5od el value bt3t el mail w hdeha ll function login el fl service 3shan t3mlha save fl local
    this._router.navigateByUrl("/")
  }

}
