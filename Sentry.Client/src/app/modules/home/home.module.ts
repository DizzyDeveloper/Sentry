import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { ProfileSectionComponent } from "./components/sections/profile/profile-section.component";
import { AuthGuard } from "./auth-guard";
import { AuthTokenInterceptor } from "./authTokenInterceptor";
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
    declarations: [ HomeComponent, ProfileSectionComponent ],
    imports: [ HomeRoutingModule ],
    providers: [AuthGuard, {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptor,
      multi: true
    }],
    bootstrap: []
  })
  export class HomeModule { }