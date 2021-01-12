import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.model' ;

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.scss']
})
export class RecapComponent implements OnInit {
  user: User;

  constructor() {
    this.user = new User() ;
  }

  ngOnInit(): void {
    var recap : HTMLElement = document.getElementsByTagName("app-recap")[0] as HTMLElement ;

    recap.style.display = "none" ;
  }

  recapRedirection(){
    var account : HTMLElement = document.getElementsByTagName("app-register")[0] as HTMLElement ;
    var recap : HTMLElement = document.getElementsByTagName("app-recap")[0] as HTMLElement ;

    var validation = document.getElementById("validation") ;

    recap.style.display = "none" ;
    account.style.display = "" ;

    setTimeout(function(){
      validation.classList.remove("valid") ;
    }, 10);
  }

  recapAccept(){
    var account : HTMLElement = document.getElementsByTagName("app-register")[0] as HTMLElement ;
    var recap : HTMLElement = document.getElementsByTagName("app-recap")[0] as HTMLElement ;

    recap.style.display = "none" ;
  }
}
