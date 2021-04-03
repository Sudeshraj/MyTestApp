import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DtailsComponent } from './dtails/dtails.component';
import { EditDtailsComponent } from './edit-dtails/edit-dtails.component';
import { GetalldetailsComponent } from './getalldetails/getalldetails.component';

const routes: Routes = [
  {path: '' ,component : DtailsComponent},
  {path: 'getalldetails' ,component : GetalldetailsComponent},
  {path: 'edit-dtails' ,component : EditDtailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
