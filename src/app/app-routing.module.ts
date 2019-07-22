import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/messages', pathMatch: 'full' },
  {
    path: 'request',
    loadChildren: () => import('./request/request.module').then(mod => mod.RequestModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./messages/messages.module').then(mod => mod.MessagesModule)
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
