import {Component, OnInit} from '@angular/core';
import {HomeService} from '../../services/home.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EditCartComponent} from '../edit-cart/edit-cart.component';
import {CartService} from '../../services/cart.service';
import {ProductsDetailsComponent} from '../products-details/products-details.component';
import {TokenStorageService} from '../../services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public productArray: any = [];

  public start = 0;
  public size = 10;

  errorMessage = '';

  constructor(public homeService: HomeService,
              public cartService: CartService,
              private modalService: NgbModal,
              private tokenStorageService: TokenStorageService) {
  }

  ngOnInit(): void {

    this.getData(this.start, this.size);
    this.getCart(this.tokenStorageService.getUser().id);

  }

  getData(page: number, size: number): void {
    this.homeService.getProducts(page, size).then(value => {
      value.subscribe((AttributeArray: any) => {
        this.productArray = AttributeArray;
      });
    });
  }


  getCart(userId: number): void {
    this.cartService.getCart(userId).subscribe(response => {
        this.cartService.cartArray = response;
      },
      err => {
        this.errorMessage = err.message;
      });
  }

  more(product: any): void {
    const modalRef = this.modalService.open(ProductsDetailsComponent, {size: 'sm'});
    modalRef.componentInstance.product = product;
  }

  edit(cart: any): void {
    const modalRef = this.modalService.open(EditCartComponent, {size: 'sm'});
    modalRef.componentInstance.form.qty = cart.qty;
    modalRef.componentInstance.previousQty = cart.qty;
    modalRef.componentInstance.form.product_id = cart.product_id;
    modalRef.componentInstance.form.id = cart.id;
  }

  remove(cart: any): void {
    this.cartService.deleteCartItem(this.tokenStorageService.getUser().id, cart.id).subscribe(response => {
        this.cartService.cartArray = response;
      },
      err => {
        this.errorMessage = err.message;
      });
  }

}
