import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Products } from '../../shared/model/products.model';
import { ProductsService } from '../../shared/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../../assets/css/responsive.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit, AfterViewInit {

  private products: Products[];
  private product: Products;

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) { }

  getAll(): void {
    this.productsService.getAll().then(res => this.products = res.sort((a, b) => {return b.productId - a.productId}));
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

  gotoDetail(id) {
    this.router.navigate(['/products', id]);
  }
}

