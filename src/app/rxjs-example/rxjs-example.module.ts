import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsExampleComponent } from './rxjs-example.component';

@NgModule({
  exports: [RxjsExampleComponent],
  declarations: [RxjsExampleComponent],
  imports: [
    CommonModule
  ]
})
export class RxjsExampleModule { }
