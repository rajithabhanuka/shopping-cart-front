import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

const PRODUCT_API = environment.baseUrl;
const CART_API = environment.baseUrl;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) {
  }


  async getProducts(page: number, size: number): Promise<any> {
    const api = PRODUCT_API + `api/products?page=${page}&size=${size}`;
    return this.http.get(api, httpOptions);
  }

  // Call to authenticate to validate the user
  addToCart(data: any): Observable<any> {
    return this.http.post(CART_API + 'api/carts', data , httpOptions);
  }

}
