import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './_layout/home/home-layout/home-layout.component';
import { LandingLayoutComponent } from './_layout/landing/landing-layout/landing-layout.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';


const appRoutes: Routes = [
    
        // App routes goes here here
    { 
        path: '',
        component: LandingLayoutComponent, 
        children: [
            { path: '', component: LoginComponent, pathMatch: 'full' },
            { path: 'register', component: RegisterComponent }
        ]
    },
        
    //Site routes goes here 
    { 
        path: '', 
        component: HomeLayoutComponent,
        children: [
          { path: 'home', component: HomeComponent, pathMatch: 'full'},
        ]
    },
    
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(appRoutes) ]
  })

export class AppRoutingModule { }


