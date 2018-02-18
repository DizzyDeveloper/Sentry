import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './_layout/home/home-layout/home-layout.component';
import { LandingLayoutComponent } from './_layout/landing/landing-layout/landing-layout.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NgModule } from '@angular/core';


const appRoutes: Routes = [   
    { 
        path: '',
        component: LandingLayoutComponent, 
        children: [
            { path: '', component: LoginComponent, pathMatch: 'full' },
            { path: 'register', component: RegisterComponent }
        ]
    }
];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(appRoutes) ]
  })

export class AppRoutingModule { }


