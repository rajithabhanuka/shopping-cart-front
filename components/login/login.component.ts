import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {TokenStorageService} from '../../services/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: any = {
    username: 'rajithabhanuka1@gmail.com',
    password: 'PPassword@123'
  };

  errorMessage = '';

  constructor(public loginService: LoginService,
              private tokenStorage: TokenStorageService,
              private router: Router) {
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.loginService.isLoggedIn = true;
    }
  }

  onSubmit(): void {

    const {username, password} = this.form;

    this.loginService.login(username, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.jwtToken);
        this.tokenStorage.saveUser(data.user);

        this.loginService.isLoggedIn = true;
        this.makeSuccessfulLogin();
      },
      err => {
        this.errorMessage = err.message;
      }
    );
  }

  makeSuccessfulLogin(): void {
    this.router.navigate(['home']);
  }
}
