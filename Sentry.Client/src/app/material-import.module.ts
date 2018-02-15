import { NgModule } from '@angular/core';
import { MatInputModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [ NoopAnimationsModule, MatInputModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule ],
  exports: [ MatInputModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule ]  
})

export class MaterialImportModule { }
