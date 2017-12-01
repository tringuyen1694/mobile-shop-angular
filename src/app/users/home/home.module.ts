import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeRoutes as routes } from './home.routes';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { SliderComponent } from './slider/slider.component';
import { ProductsService } from '../../shared/services/products.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    HomeComponent,
    SliderComponent
  ],
  providers: [
    ProductsService
  ]
})
export class HomeModule { }
