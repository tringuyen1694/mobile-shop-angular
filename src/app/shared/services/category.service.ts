import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Category } from '../model/category.model';
import { environment } from '../../../environments/environment.prod';

@Injectable()
export class CategoryService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  
    constructor(private http: Http) { }
  
    getAll(): Promise<Category[]> {
      return this.http.get(environment.api_url + '/category')
        .toPromise()
        .then(res => res.json());
    }
  
    getById(id): Promise<Category> {
      return this.http.get(environment.api_url + '/category/' + id)
        .toPromise()
        .then(res => res.json());
    }
  
    getProductName(name): Promise<Category[]> {
      return this.http.get(environment.api_url + '/category/findproductname/' + name)
        .toPromise()
        .then(res => res.json());
    }
  
    create(category) {
      return this.http.post(environment.api_url + '/category', JSON.stringify(category), { headers: this.headers })
        .toPromise();
    }
  
    update(category) {
      return this.http.put(environment.api_url + '/category', JSON.stringify(category), { headers: this.headers })
        .toPromise()
        .then(res => res.json());
    }
  
    delete(id: number) {
      return this.http.delete(environment.api_url + '/category/' + id)
        .toPromise()
        .then(res => res.json());
    }
}
