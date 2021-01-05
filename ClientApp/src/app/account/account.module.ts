import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RegisterComponent } from "./register/register.component" ;
import { RecapComponent } from './recap/recap.component';

import { PhonePipe } from "../phone.pipe" ;

import { AccountComponent } from './account.component' ;
import { AccountRoutingModule } from './account-routing.module';

@NgModule({
  declarations: [
    RegisterComponent,
    RecapComponent,
    AccountComponent,
    PhonePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AccountRoutingModule
  ],
  bootstrap: [AccountComponent]
})
export class AccountModule { }
