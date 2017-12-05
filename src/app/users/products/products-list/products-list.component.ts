import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from '../../../shared/model/products.model';
import { ProductsService } from '../../../shared/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html'
})
export class ProductsListComponent implements OnInit {

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

  trackByStudent(product) {
    return product.productId;
  }

  gotoDetail(id){
    this.router.navigate(['/products', id]);
  }
}
