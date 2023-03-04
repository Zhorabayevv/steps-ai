import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TableComponent } from 'src/app/table/components/table/table.component';
import { NgAntModule } from '../ng-ant.module';


@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgAntModule,
    BrowserAnimationsModule
  ],
  providers: [],
  exports: [TableComponent]
})
export class TableModule { }
