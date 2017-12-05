import { Component, OnInit } from '@angular/core';
import { Products } from '../../../shared/model/products.model';
import { ProductsService } from '../../../shared/services/products.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css', '../../admin.component.css']
})
export class ProductsDetailComponent implements OnInit {

  private product: Products;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  getDetail() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productsService.getById(id).then(res => this.product = res);
  }

  gotoBack(): void {
    this.router.navigate(['admins/products']);
  }

  ngOnInit() {
    this.getDetail();
  }

}
