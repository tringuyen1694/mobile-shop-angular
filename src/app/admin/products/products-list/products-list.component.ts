import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Products } from '../../../shared/model/products.model';
import { ProductsService } from '../../../shared/services/products.service';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['../../admin.component.css']
})
export class ProductsListComponent implements OnInit {

  private products: Products[];
  private product: Products;

  private productName = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]);
  private image = new FormControl();
  private amount = new FormControl('', [Validators.required]);
  private description = new FormControl();
  private brandName = new FormControl();

  private createPro: FormGroup;
  private searchControl = new FormControl();

  private productId: number;

  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 5,
    currentPage: 1
  };

  @ViewChild('fileInput') fileInput: ElementRef;
  constructor(
    private productsService: ProductsService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  getAll(): void {
    this.productsService.getAll().then(res => this.products = res);
  }

  // search(): void {
  //   this.searchControl.valueChanges.subscribe(value => {
  //     value == "" ? this.getAll() : this.productsService.(value).then(res => this.students = res);
  //   });
  // }
  reset(): void {
    this.createPro.reset();
  }
  ngOnInit() {
    this.getAll();
    // this.search();

    this.createPro = this.fb.group({
      productName: this.productName,
      image: this.image,
      amount: this.amount,
      description: this.description,
      brandName: this.brandName
    });
  }

  trackByStudent(product) {
    return product.productId;
  }

  gotoDetail(id) {
    this.router.navigate(['/products', id]);
  }

  addnew() {
    this.reset();
  }

  onFileChange(event) {
    if(event.target.files.length > 0) {
      let file = event.target.files[0];
      this.createPro.get('image').setValue(file.name);
    }
  }

  onCreate(): void {
    this.productsService.create(this.createPro.value).then(cus => {
      if (cus.code == "200")
        this.getAll();
    });
    this.createPro.reset();
  }

  delete(id: number): void {
    this.productId = id;
  }
  
  confirmDelete(): void {
    this.productsService.delete(this.productId).then(() => this.getAll());
  }
}
