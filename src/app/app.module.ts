import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DtailsComponent } from './dtails/dtails.component';
import { GetalldetailsComponent } from './getalldetails/getalldetails.component';
import {HttpClientModule} from '@angular/common/http';
import { EditDtailsComponent } from './edit-dtails/edit-dtails.component';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DtailsComponent,
    GetalldetailsComponent,
    EditDtailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
