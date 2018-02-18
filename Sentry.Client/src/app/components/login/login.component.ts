import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private accountService: AccountService, private router: Router) { }

  email: string;
  password: string;

  ngOnInit() {
  }

  login(): void {
    this.router.navigate(['home']);
    
    this.accountService
    .login(this.email, this.password)
    .subscribe(r => {
      if(r){
        this.router.navigate(['home']);
      }
    });
  }
}
