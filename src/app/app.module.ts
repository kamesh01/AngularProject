import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    // Array of components
    AppComponent
  ],
  imports: [
    // Array of modules
    BrowserModule
  ],
  providers: [
    // Array of services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
