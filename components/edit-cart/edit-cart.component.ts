import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-edit-cart',
  templateUrl: './edit-cart.component.html',
  styleUrls: ['./edit-cart.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EditCartComponent implements OnInit {

  form: any = {
    qty: '',
    product_id: '',
    id: ''
  };

  errorMessage = '';

  constructor(public cartService: CartService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {

    const data = {

      id: this.form.id,
      user_id: 1,
      product_id: this.form.product_id,
      qty: this.form.qty,
      order_type: 'unit',

    };

    this.cartService.addToCart(data).subscribe(response => {
        this.cartService.cartArray = response;
      },
      err => {
        this.errorMessage = err.message;
      });

  }

}
