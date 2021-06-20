import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {ProductsComponent} from './components/products/products.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductsComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

// anActivate: [AuthGuard],

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
