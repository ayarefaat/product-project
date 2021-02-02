import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
isLogged:boolean;// 3shan de b false f keda el login 3la tol htkon zahra

/*shelt el false mn hena w 5leto y5od el initial value gwa el onInit
mn el function el bt3ml check 3la local storage*/
  constructor(private _userService:UserService) { }

  ngOnInit(): void {
   this.isLogged= this._userService.isLogged();
   //hsawe is logged bel value el rag3a mn islogged w hya btgeb el value mn el local storage;
   this._userService.getLoggedStatus().subscribe(status=>{
     this.isLogged=status;
     //mogrd m el return bta3 el function yt8yar hyro7 m8yr el value bt3et isLogged
   })
  }

}
