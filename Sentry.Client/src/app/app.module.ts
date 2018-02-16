import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LandingLayoutComponent } from './_layout/landing/landing-layout/landing-layout.component';
import { HomeLayoutComponent } from './_layout/home/home-layout/home-layout.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AccountService } from './services/account.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialImportModule } from './material-import.module';
import { EqualValidator } from './validators/equalValidator';

@NgModule({
  declarations: [
    AppComponent,
    LandingLayoutComponent,
    HomeLayoutComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    EqualValidator
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MaterialImportModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
