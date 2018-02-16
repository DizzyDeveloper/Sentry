import { NgModule } from '@angular/core';
import { MatInputModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatToolbarModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [ NoopAnimationsModule, MatInputModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatToolbarModule ],
  exports: [ MatInputModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatToolbarModule ]  
})

export class MaterialImportModule { }
