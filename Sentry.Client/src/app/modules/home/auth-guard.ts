import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { AccountService } from "../../services/account.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private accountService: AccountService,public router: Router){
        
    }
    canActivate() {        
        if(this.accountService.isUserLoggedIn()){
            return true;
        }else{
            this.router.navigate(['']);
            return false
        }      
    }
  }