import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './layout/header.component';
import { AdminComponent } from './admin.component';
import { ProductsModule } from './products/products.module';
import { ProductsService } from '../shared/services/products.service';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    ProductsModule
  ],
  declarations: [
    HeaderComponent,
    AdminComponent
  ],
  providers: [ProductsService]
})
export class AdminModule { }
