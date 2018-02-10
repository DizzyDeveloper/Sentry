import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  ngOnInit() {
  }

  login(): void {
    this.accountService
    .login('email@address.com', 'password1')
    .subscribe(r => { console.log(r) });
  }
}
