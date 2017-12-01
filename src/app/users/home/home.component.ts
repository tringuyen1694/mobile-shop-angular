import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Products } from '../../shared/model/products.model';
import { ProductsService } from '../../shared/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../../assets/css/responsive.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit, AfterViewInit {

  private products: Products[];
  private product: Products;

  constructor(private productsService: ProductsService) { }

  getAll(): void {
    this.productsService.getAll().then(res => this.products = res);
  }
  
  public loadScript(url) {
    let script = document.createElement('script');
    script.src = url;
    document.head.appendChild(script);
  }

  ngOnInit() {
    this.getAll();
  }

  ngAfterViewInit(): void {
    this.loadScript('assets/js/main.js');
  }


  Quickview(product: Products) {
    this.product = product;
  }

}

