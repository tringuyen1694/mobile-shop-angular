import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Products } from '../../../shared/model/products.model';
import { ProductsService } from '../../../shared/services/products.service';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css', '../../../../assets/css/responsive.css'],
  encapsulation: ViewEncapsulation.None
})
export class SliderComponent implements OnInit, AfterViewInit {

  private products: Products[];

  constructor(private productsService: ProductsService) { }

  getAll(): void {
    this.productsService.getAll().then(res => this.products = res);
  }

  ngOnInit() {
    this.getAll();
  }

  ngAfterViewInit(): void {

  }

}
