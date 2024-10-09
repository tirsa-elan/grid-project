import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AgGridAngular } from 'ag-grid-angular';
import { GridTableComponent } from './grid-table/grid-table.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    GridTableComponent,
    AgGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    MatSelectModule,
    BrowserAnimationsModule,
    AgGridAngular,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
