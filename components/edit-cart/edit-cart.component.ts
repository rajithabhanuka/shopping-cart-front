import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-cart',
  templateUrl: './edit-cart.component.html',
  styleUrls: ['./edit-cart.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EditCartComponent implements OnInit {

  public previousQty = 0;

  form: any = {
    qty: '',
    product_id: '',
    id: ''
  };

  errorMessage = '';

  constructor(public cartService: CartService,
              public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {

    const finalQty = (this.form.qty - this.previousQty);

    const data = {

      id: this.form.id,
      user_id: 1,
      product_id: this.form.product_id,
      qty: finalQty,
      order_type: 'unit',

    };

    this.cartService.addToCart(data).subscribe(response => {
        this.cartService.cartArray = response;
        this.activeModal.close('Close click');
      },
      err => {
        this.errorMessage = err.message;
      });

  }

}
