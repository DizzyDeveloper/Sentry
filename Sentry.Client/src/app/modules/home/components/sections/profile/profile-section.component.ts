import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'profile-section',
  templateUrl: './profile-section.component.html'
})
export class ProfileSectionComponent implements OnInit {

  constructor() { }

  email: string;
  password: string;

  ngOnInit() {
  }  
}