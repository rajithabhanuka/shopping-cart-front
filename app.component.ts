import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from './services/token-storage.service';
import {LoginService} from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'shopping-cart-front';

  username?: string;

  constructor(private tokenStorageService: TokenStorageService,
              public loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.isLoggedIn = !!this.tokenStorageService.getToken();
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
