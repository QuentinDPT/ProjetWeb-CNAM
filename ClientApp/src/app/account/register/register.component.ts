import { Component, OnInit } from '@angular/core';
import { allCountries } from '../../../services/country.service' ;
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User;
  allCountries: string[] ;

  constructor() {
    this.allCountries = allCountries ;
    this.user = new User() ;
  }

  ngOnInit(): void {
    this.user.country = "France" ;
  }

  onSubmit(){
    console.log(this.user) ;
    var self = this ;

    var name    :HTMLTextAreaElement  = document.getElementById("name") as HTMLTextAreaElement;
    var surname :HTMLTextAreaElement  = document.getElementById("surname") as HTMLTextAreaElement;
    var address :HTMLTextAreaElement  = document.getElementById("address") as HTMLTextAreaElement;
    var postal  :HTMLTextAreaElement  = document.getElementById("cp") as HTMLTextAreaElement;
    var phone   :HTMLTextAreaElement  = document.getElementById("phone") as HTMLTextAreaElement;
    var country :HTMLTextAreaElement  = document.getElementById("country") as HTMLTextAreaElement;
    var email   :HTMLTextAreaElement  = document.getElementById("email") as HTMLTextAreaElement;
    var civility:HTMLTextAreaElement  = document.getElementById("civility") as HTMLTextAreaElement;
    var login   :HTMLTextAreaElement  = document.getElementById("login") as HTMLTextAreaElement;
    var password:HTMLTextAreaElement  = document.getElementById("pwd") as HTMLTextAreaElement;

    var btnValidation = document.getElementById("btnValidation") ;
    var validation = document.getElementById("validation") ;

    var isValid =  name.checkValidity()    && surname.checkValidity() &&
                   address.checkValidity() && postal.checkValidity() &&
                   phone.checkValidity()   && country.checkValidity() &&
                   email.checkValidity()   && civility.checkValidity() &&
                   login.checkValidity()   && password.checkValidity() ;

    if(isValid)
    {
      validation.classList.add("valid") ;
      setTimeout(function(){
        self.submitRedirection();
      }, 700);
    }else{
      btnValidation.classList.add("invalid") ;
      setTimeout(function(){
        btnValidation.classList.remove("invalid") ;
      }, 510);
    }
  }

  submitRedirection(){
    //*
    (document.getElementById("r_name") as HTMLElement).innerHTML     = (document.getElementById("name") as HTMLTextAreaElement).value ;
    (document.getElementById("r_surname") as HTMLElement).innerHTML  = (document.getElementById("surname") as HTMLTextAreaElement).value ;
    (document.getElementById("r_address") as HTMLElement).innerHTML  = (document.getElementById("address") as HTMLTextAreaElement).value ;
    (document.getElementById("r_cp") as HTMLElement).innerHTML       = (document.getElementById("cp") as HTMLTextAreaElement).value ;
    (document.getElementById("r_phone") as HTMLElement).innerHTML    = (document.getElementById("phone") as HTMLTextAreaElement).value ;
    (document.getElementById("r_country") as HTMLElement).innerHTML  = (document.getElementById("country") as HTMLTextAreaElement).value ;
    (document.getElementById("r_email") as HTMLElement).innerHTML    = (document.getElementById("email") as HTMLTextAreaElement).value ;
    (document.getElementById("r_civility") as HTMLElement).innerHTML = (document.getElementById("civility") as HTMLTextAreaElement).value ;
    (document.getElementById("r_login") as HTMLElement).innerHTML    = (document.getElementById("login") as HTMLTextAreaElement).value ;
    (document.getElementById("r_pwd") as HTMLTextAreaElement).value  = (document.getElementById("pwd") as HTMLTextAreaElement).value ;
    //*/

    var account : HTMLElement = document.getElementsByTagName("app-register")[0] as HTMLElement ;
    var recap : HTMLElement   = document.getElementsByTagName("app-recap")[0] as HTMLElement ;

    account.style.display = "none" ;
    recap.style.display = "" ;
  }

}
