import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileInfo } from '../../../models/user/profileInfo';
import { AccountService } from '../../../../../services/account.service';

@Component({
  selector: 'profile-section',
  templateUrl: './profile-section.component.html'
})
export class ProfileSectionComponent implements OnInit {

  constructor(private accountService: AccountService) { }
  profileInfo: ProfileInfo;

  ngOnInit() {
    this.accountService
    .getUserProfile()
    .subscribe(result => {
      console.log(result);
      this.profileInfo = result;
    }, error=>console.log(error));
  }  
}