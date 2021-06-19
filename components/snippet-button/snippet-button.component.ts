import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-snippet-button',
  templateUrl: './snippet-button.component.html',
  styleUrls: ['./snippet-button.component.scss']
})
export class SnippetButtonComponent implements OnInit {

  amount: number | undefined;
  @Input() isCarton = false;
  @Input() product: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  addQty(): void{
    if (this.amount === undefined || this.amount === 0) {
      alert('Amount should be greater than 0');
      return;
    }

    console.log(this.product.name);
    // this.getAmount.emit({
    //   item: this.item,
    //   amount: this.amount,
    //   isCarton: this.isCarton,
    //   action: 'add'
    // });
  }

  dropQty(): void {
    if (this.amount === undefined || this.amount === 0) {
      alert('Amount should be greater than 0');
      return;
    }
    // this.getAmount.emit({
    //   item: this.item,
    //   amount: this.amount,
    //   isCarton: this.isCarton,
    //   action: 'reduce'
    // });
  }

}
