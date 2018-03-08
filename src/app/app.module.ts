import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { DatePipe } from '@angular/common';
import { DataTableModule } from 'angular5-data-table'

import { BsDropdownModule, CollapseModule, BsDatepickerModule } from 'ngx-bootstrap';
import { AppErrorHandler } from './common/app-error-handler';
import { ErrorHandler } from '@angular/core';
import { RegisterService } from './services/register.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { ProductService } from './services/product.service';
import { CategoryService } from './services/category.service';
import { AuthService } from './services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService as AuthGuard  } from './services/auth-guard.service';
import { NoAccessComponent } from './no-access/no-access.component';
import { AdminAuthGuard } from './services/admin-auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    ProductFormComponent,
    NoAccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,     
    HttpModule,
    JwtModule.forRoot({
      config: {
       tokenGetter() {
          return localStorage.getItem('token')
        }
      }
    }),
    HttpClientModule,
    DataTableModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { 
        path: 'shopping-cart',
        component: ShoppingCartComponent,
        canActivate: [AuthGuard] 
      },
      { 
        path: 'checkout',
        component: CheckoutComponent,
        canActivate: [AuthGuard] 
      },
      { 
        path: 'my-orders',
        component: MyOrdersComponent,
        canActivate: [AuthGuard] 
      },
      {
        path: 'order-success',
        component: OrderSuccessComponent,
        canActivate: [AuthGuard] 
      },

      { path: 'login', component: LoginComponent },

      { path: 'register', component: RegisterComponent },

      { path: 'admin/products/new', 
        component: ProductFormComponent,
        canActivate: [AuthGuard] 
      },
      { path: 'admin/products/:id', 
        component: ProductFormComponent,
        canActivate: [AuthGuard, AdminAuthGuard] 
      },
      { path: 'admin/products',
        component: AdminProductsComponent,
        canActivate: [AuthGuard, AdminAuthGuard] 
      },
      { path: 'admin/orders',
        component: AdminOrdersComponent,
        canActivate: [AuthGuard, AdminAuthGuard] },

      { path: 'no-access', component: NoAccessComponent },
        
      { path: '**', redirectTo: '' }
    ])
  ],
  providers: [
    RegisterService,
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    JwtHelperService,
    ProductService,
    CategoryService,
    DatePipe,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
