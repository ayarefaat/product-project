import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
logged=new Subject<boolean>();
//el subject dh hy3ml share ll boolean eza kan el ragel 3aml logged wla la2!
  constructor() {
    //3ayz awel m el subject yfta7 ya5od a5er value mwgoda w de hngbha mn islogged() bt3ml check 3la el locals storage
    this.logged.next(this.isLogged())

  }
  login(email:string){
    localStorage.setItem("Email" ,email);
    //3ayza aseb ay info t3rfni eno 3aml login
    this.logged.next(true);
    //hna b3d m 3amlt login keda b7aded el value el 3ayza ay7ad yshofha lma a3ml login w hya true
  }
  logout(){
    localStorage.removeItem("Email");
    //w hwa by3ml logout h3ml remove ll item
    this.logged.next(false);
    // hena 5alet el value b3d m3amlt logout b false keda b8yar el value bt3et el subject bta3i
  }

  getLoggedStatus(){
    return this.logged.asObservable()
    /*zay isLogged() htrg3 el value bt3et el subject.. bas el far2 en de h5leha observable
     3shan lma el value tt8yar tsm3 fl 3amlha subscribe (y3ni el bybos 3la el logged status)
     fy7es belt8yeer 3la tol*/
  }



  setLoggedStatus(status:boolean){
    this.logged.next(status);
    /*el function de mmken ast5dmha fl login w a3ml call leha w adeha true ,, w nfs el klam m3 logout
     w hdeha false.. w keda hshel (isLogged.next(false)) 3shan ana 7atah hna fl function */
  }
//subject bnrbto b 2function getstatus() 3shan trg3 el value w setStatus() 3shan t8yr el value

  isLogged():boolean{
    //3ayz ageb el value bt3et el mail w ashof hya mwgoda wla la 3shan a3rf hwa ked login wla!
    let email=localStorage.getItem("Email")
    if(email==null){
      return false
    }else{
      return true
    }
  }
}
