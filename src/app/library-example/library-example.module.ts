import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryExampleComponent } from './library-example.component';

@NgModule({
  exports: [LibraryExampleComponent],
  declarations: [LibraryExampleComponent],
  imports: [
    CommonModule
  ]
})
export class LibraryExampleModule { }
