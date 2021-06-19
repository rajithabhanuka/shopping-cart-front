import {Component, OnInit} from '@angular/core';
import {HomeService} from '../../services/home.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public productArray: any = [];
    public start = 0;
    public size = 10;

    constructor(private homeService: HomeService) {
    }

    ngOnInit(): void {

        this.getData(this.start, this.size);

    }

    getData(page: number, size: number): void {
        this.homeService.getProducts(page, size).then(value => {
            value.subscribe((AttributeArray: any) => {
                this.productArray = AttributeArray;
            });
        });
    }

}
