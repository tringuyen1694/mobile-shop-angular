import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../../../shared/model/products.model';
import { ProductsService } from '../../../shared/services/products.service';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html'
})
export class ProductsDetailComponent implements OnInit, AfterViewInit {
  private product: Products;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) { }
  
  public loadScript(url) {
    let script = document.createElement('script');
    script.src = url;
    document.head.appendChild(script);
  }
  Quickview(product: Products) {
    this.product = product;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.productsService.getById(id).then(res => this.product = res);
  }

  ngAfterViewInit(){
    this.loadScript('assets/js/main.js');
  }
}
