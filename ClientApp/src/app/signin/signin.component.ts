import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  login: string;
  password: string;

  constructor(private dataService: LoginService) { }

  ngOnInit(): void {
  }

  log(){
    this.dataService.login(this.login, this.password).subscribe(function(e){
      if(e.success){
        console.log(e) ;
        localStorage.setItem('user', JSON.stringify(e.user));

      }
    })
  }
}
