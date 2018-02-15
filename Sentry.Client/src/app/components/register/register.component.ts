import { Component, OnInit } from '@angular/core';
import { Registration } from '../../models/user/registration';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registration = new Registration();
  constructor(private accountService: AccountService) { }
  

  ngOnInit() {
  }

  register(): void {
    this.accountService
    .register(this.registration)
    .subscribe(r => { console.log(r) });
  }
}
