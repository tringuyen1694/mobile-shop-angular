import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'admins',
    loadChildren: 'app/admin/admin.module#AdminModule'
  },
  //{path: '', redirectTo: 'main', pathMatch: 'full'},
  {
    path: '',
    loadChildren: 'app/users/users.module#UsersModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
