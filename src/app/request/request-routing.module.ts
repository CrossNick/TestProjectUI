import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestComponent } from './request/request.component';


const routes: Routes = [
  {
    path: '',
    component: RequestComponent
  },
  {
    path: ':id',
    component: RequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestRoutingModule { }
