import { Component, OnInit } from '@angular/core';
import { UserService } from './../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private _userService:UserService, private _router:Router) { }

  ngOnInit(): void {
    this._userService.logout();
    //el logout component msh bykon fe ui f ana b2olo awl lma td5ol el component e3mli logout
    this._router.navigateByUrl("/login")

  }

}
