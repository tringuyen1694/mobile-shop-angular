import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Products } from '../model/products.model';
import { environment } from '../../../environments/environment.prod';

@Injectable()
export class ProductsService {

  private url = 'http://localhost:8080/api/products';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getAll(): Promise<Products[]> {
    return this.http.get(environment.api_url + '/products')
      .toPromise()
      .then(res => res.json());
  }

  getById(id): Promise<Products> {
    return this.http.get(environment.api_url + '/products/' + id)
      .toPromise()
      .then(res => res.json());
  }

  getProductName(name): Promise<Products[]> {
    return this.http.get(environment.api_url + '/products/findproductname/' + name)
      .toPromise()
      .then(res => res.json());
  }

  create(products) {
    return this.http.post(environment.api_url + '/products', JSON.stringify(products), { headers: this.headers })
      .toPromise();
  }

  update(products) {
    return this.http.put(environment.api_url + '/products', JSON.stringify(products), { headers: this.headers })
      .toPromise()
      .then(res => res.json());
  }

  delete(id: number) {
    return this.http.delete(environment.api_url + '/products/' + id)
      .toPromise()
      .then(res => res.json());
  }
}
