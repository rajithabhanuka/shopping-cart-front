import {Component, OnInit} from '@angular/core';
import {HomeService} from '../../services/home.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EditCartComponent} from '../edit-cart/edit-cart.component';
import {CartService} from '../../services/cart.service';

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
              private modalService: NgbModal) {
  }

  ngOnInit(): void {

    this.getData(this.start, this.size);
    this.getCart(1);

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

  edit(cart: any): void {
    const modalRef = this.modalService.open(EditCartComponent, {size: 'sm'});
    modalRef.componentInstance.form.qty = cart.qty;
    modalRef.componentInstance.form.product_id = cart.product_id;
    modalRef.componentInstance.form.id = cart.id;
  }

  remove(): void {

  }

}
