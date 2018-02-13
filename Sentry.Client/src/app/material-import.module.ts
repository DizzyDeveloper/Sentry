import { NgModule } from '@angular/core';
import { MatInputModule, MatButtonModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [ NoopAnimationsModule, MatInputModule, MatButtonModule ],
  exports: [ MatInputModule, MatButtonModule ]  
})

export class MaterialImportModule { }
