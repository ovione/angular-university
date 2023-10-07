import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsExampleModule } from './rxjs-example/rxjs-example.module';
import { LibraryExampleModule } from './library-example/library-example.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RxjsExampleModule,
    LibraryExampleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
