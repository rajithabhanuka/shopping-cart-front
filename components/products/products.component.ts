import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  form: any = {
    productName: '',
    unitsPerCartoon: '',
    pricePerCartoon: '',
    unitDiscount: '',
    cartoonDiscount: '',
    discountEligibility: '',
    productImage: ''
  };

  errorMessage = '';

  constructor(private productService: ProductsService,
              private toast: ToastrService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {

    const {
      productName,
      unitsPerCartoon,
      pricePerCartoon,
      unitDiscount,
      cartoonDiscount,
      discountEligibility,
      productImage
    } = this.form;

    const data = {
      name: productName,
      units_per_cartoon: unitsPerCartoon,
      price_per_cartoon: pricePerCartoon,
      unit_discount: unitDiscount,
      cartoon_discount: cartoonDiscount,
      discount_eligibility: discountEligibility,
      image: productImage
    };

    this.productService.save(data).subscribe(response => {
       this.proceedSuccessTrx('Data Successfully Saved');
      // alert('Data Successfully Saved');
      },
      err => {
         this.errorMessageToasterTopCenter(err.error_code, err.message);
        // alert('Error While Saving Data');
      });

  }

  proceedSuccessTrx(response: string): void {
    this.successToasterTopCenter('', response + '!');
  }

  removeToastr(): void {
    this.toast.clear();
  }

  successToasterTopCenter(message: string, title: string, seconds?: number): void {
    this.removeToastr();
    let timeOutMilliSec = 5000;
    if (seconds !== undefined) {
      timeOutMilliSec = seconds * 1000;
    }
    this.toast.success(message, title, {
      positionClass: 'toast-top-center',
      timeOut: timeOutMilliSec
    });
  }

  errorMessageToasterTopCenter(message: string, title: string, seconds?: number): void {
    this.removeToastr();
    let timeOutMilliSec = 5000;
    if (seconds !== undefined) {
      timeOutMilliSec = seconds * 1000;
    }
    this.toast.error(message, title, {
      positionClass: 'toast-top-center',
      timeOut: timeOutMilliSec,
    });
  }
}
