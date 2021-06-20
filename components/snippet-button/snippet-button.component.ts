import {Component, Input, OnInit, Output} from '@angular/core';
import {HomeService} from '../../services/home.service';

@Component({
  selector: 'app-snippet-button',
  templateUrl: './snippet-button.component.html',
  styleUrls: ['./snippet-button.component.scss']
})
export class SnippetButtonComponent implements OnInit {

  amount = 0;
  @Input() isCarton = false;
  @Input() product: any;

  currentUnit = 0;

  errorMessage = '';

  constructor(public homeService: HomeService) {
  }

  ngOnInit(): void {
  }

  addQty(): void {

    let type;

    if (this.isCarton) {
      type = 'cartoon';
    } else {
      type = 'unit';
    }

    this.amount = this.currentUnit += 1;

    const data = {
      user_id: 1,
      product_id: this.product.id,
      qty: 1,
      order_type: type,
    };

    this.homeService.addToCart(data).subscribe(response => {
        this.homeService.cartArray = response;
      },
      err => {
        this.errorMessage = err.message;
      });

  }

  dropQty(): void {

    if (this.amount <= 0) {
      alert('Amount should be greater than 0');
      return;
    }

    let type;

    if (this.isCarton) {
      type = 'cartoon';
    } else {
      type = 'unit';
    }

    this.amount = this.currentUnit -= 1;

    const data = {
      user_id: 1,
      product_id: this.product.id,
      qty: -1,
      order_type: type,
    };

    this.homeService.addToCart(data).subscribe(response => {
        this.homeService.cartArray = response;
      },
      err => {
        this.errorMessage = err.message;
      });

  }

}
