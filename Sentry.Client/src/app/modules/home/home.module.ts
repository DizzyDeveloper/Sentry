import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { ProfileSectionComponent } from "./components/sections/profile/profile-section.component";
import { AuthGuard } from "./auth-guard";

@NgModule({
    declarations: [ HomeComponent, ProfileSectionComponent ],
    imports: [ HomeRoutingModule ],
    providers: [AuthGuard],
    bootstrap: []
  })
  export class HomeModule { }