import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlipCardModule } from './flip-card/flip-card.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlipCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
