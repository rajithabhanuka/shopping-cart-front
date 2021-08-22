import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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
export class CartService {

  public cartArray: any = [];

  constructor(private http: HttpClient) {
  }

  // Call to authenticate to validate the user
  addToCart(data: any): Observable<any> {
    return this.http.post(BASE_API + 'api/carts', data, httpOptions);
  }

  getCart(userId: number): Observable<any> {
    return this.http.get(BASE_API + `api/carts?userId=${userId}`, httpOptions);
  }

  deleteCartItem(userId: number, cartId: number): Observable<any> {
    return this.http.delete(BASE_API + `api/carts/${cartId}/users/${userId}`, httpOptions);
  }

}
