import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { TableModule } from 'src/app/table/table.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TableModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
