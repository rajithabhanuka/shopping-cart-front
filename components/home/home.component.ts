import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HomeService} from '../../services/home.service';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-cart',
  templateUrl: './edit-cart.html',
  encapsulation: ViewEncapsulation.None,
  styles: []
})

export class EditCartComponent {

  form: any = {
    qty: ''
  };

  constructor(private activeModal: NgbActiveModal) {
  }

  onSubmit(): void{

  }
}

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
    this.homeService.getCart(userId).subscribe(response => {
        this.homeService.cartArray = response;
      },
      err => {
        this.errorMessage = err.message;
      });
  }

  edit(cart: any): void {
    const modalRef = this.modalService.open(EditCartComponent, {size: 'sm'});
    modalRef.componentInstance.form.qty = cart.qty;
  }

  remove(): void {

  }

}
