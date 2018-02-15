import { Component, OnInit } from '@angular/core';
import { Registration } from '../../models/user/registration';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  registration = new Registration();
  
  ngOnInit() {
  }

}
