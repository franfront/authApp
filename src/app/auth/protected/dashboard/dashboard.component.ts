import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
    `
      *{
        margin: 15px;
      }
    `
  ],
})
export class DashboardComponent {

  get usuario(){
    return this.authS.usuario;
  }
  constructor( private router: Router, private authS: AuthService) {}


  logout(){
    this.router.navigateByUrl('/auth');
    this.authS.logout();

  }

}
