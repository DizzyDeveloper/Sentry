import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { ProfileSectionComponent } from "./components/sections/profile/profile-section.component";

@NgModule({
    declarations: [ HomeComponent, ProfileSectionComponent ],
    imports: [ HomeRoutingModule ],
    providers: [],
    bootstrap: []
  })
  export class HomeModule { }