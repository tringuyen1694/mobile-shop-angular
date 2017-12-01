import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users.component';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProductsModule } from './products/products.module';
import { HomeModule } from './home/home.module';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    ProductsModule,
    HomeModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    BlogComponent,
    AboutComponent,
    UsersComponent
  ]
})
export class UsersModule { }
