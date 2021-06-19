import {Component, Input, OnInit} from '@angular/core';

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

  constructor() {
  }

  ngOnInit(): void {
  }

  addQty(): void {

    // if (this.amount === undefined || this.amount === 0) {
    //   alert('Amount should be greater than 0');
    //   return;
    // }

    // if (this.isCarton) {
    //   alert('cartoon');
    // } else {
    //   alert('Not cartoon');
    // }

    this.amount = this.currentUnit += 1;

    // this.getAmount.emit({
    //   item: this.item,
    //   amount: this.amount,
    //   isCarton: this.isCarton,
    //   action: 'add'
    // });
  }

  dropQty(): void {
    if (this.amount <= 0) {
      alert('Amount should be greater than 0');
      return;
    }

    this.amount = this.currentUnit -= 1;

    // this.getAmount.emit({
    //   item: this.item,
    //   amount: this.amount,
    //   isCarton: this.isCarton,
    //   action: 'reduce'
    // });
  }

}
