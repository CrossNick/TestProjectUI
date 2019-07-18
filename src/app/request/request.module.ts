import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestRoutingModule } from './request-routing.module';
import { RequestComponent } from './request/request.component';
import { EmailListComponent } from './email-list/email-list.component';
import { TimeListComponent } from './time-list/time-list.component';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';

@NgModule({
  declarations: [RequestComponent, EmailListComponent, TimeListComponent],
  imports: [
    CommonModule,
    RequestRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RequestModule { }
