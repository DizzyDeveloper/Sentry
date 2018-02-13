import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  email: string;
  password: string;

  ngOnInit() {
  }

  login(): void {
    this.accountService
    .login(this.email, this.password)
    .subscribe(r => { console.log(r) });
  }
}
