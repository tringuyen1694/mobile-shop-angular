import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './layout/header.component';
import { AdminComponent } from './admin.component';
import { ProductsModule } from './products/products.module';
import { ProductsService } from '../shared/services/products.service';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductsDetailComponent } from './products/products-detail/products-detail.component';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    AdminRoutingModule,
    NgxPaginationModule
  ],
  declarations: [
    HeaderComponent,
    AdminComponent,
    ProductsListComponent,
    ProductsDetailComponent
  ],
  providers: [ProductsService]
})
export class AdminModule { }
