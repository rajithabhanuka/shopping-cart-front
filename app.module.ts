import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import {SnippetButtonComponent} from './components/snippet-button/snippet-button.component';
import { ProductsComponent } from './components/products/products.component';
import {ToastrModule} from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditCartComponent } from './components/edit-cart/edit-cart.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SnippetButtonComponent,
    ProductsComponent,
    EditCartComponent,
    EditCartComponent,
    ProductsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-top-center'
    }),
    NgbModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
