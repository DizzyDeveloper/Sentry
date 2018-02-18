import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeLayoutComponent } from '../../_layout/home/home-layout/home-layout.component';
import { HomeComponent } from './home.component';


const appRoutes: Routes = [
            
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

export class HomeRoutingModule { }
