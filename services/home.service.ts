import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

const BASE_API = environment.baseUrl;

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
    const api = BASE_API + `api/products?page=${page}&size=${size}`;
    return this.http.get(api, httpOptions);
  }

  // Call to authenticate to validate the user
  addToCart(data: any): Observable<any> {
    return this.http.post(BASE_API + 'api/carts', data, httpOptions);
  }

  getCart(userId: number): Observable<any> {
    return this.http.get(BASE_API + `api/carts?userId=${userId}`, httpOptions);
  }

}
