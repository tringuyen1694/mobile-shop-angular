import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';

const usersRoutes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      { path: '', component: UsersComponent, redirectTo: 'home' },
      {
        path: 'home',
        loadChildren: 'app/users/home/home.module#HomeModule'
      },
      { path: 'blog', component: BlogComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'about', component: AboutComponent },
      {
        path: 'products',
        loadChildren: 'app/users/products/products.module#ProductsModule'
      },
      {
        path: '**', redirectTo: 'home'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(usersRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule { }
