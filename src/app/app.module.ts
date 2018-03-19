import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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

import { BsDropdownModule, CollapseModule, BsDatepickerModule, TabsModule  } from 'ngx-bootstrap';

import { MatStepperModule, MatProgressSpinnerModule, MatRadioModule } from '@angular/material'

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
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteResultComponent } from './quote/quote-result/quote-result.component';
import { TermLifeSimulatorService } from './services/termlife-simulator.service';
import { CountrySelectComponent } from './utils/country-select/country-select.component';
import { AboutComponent } from './about/about.component';
import { OccupationSelectComponent } from './utils/occupation-select/occupation-select.component';


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
    NoAccessComponent,
    ProductFilterComponent,
    ProductCardComponent,
    ProductItemComponent,
    QuoteComponent,
    QuoteResultComponent,
    CountrySelectComponent,
    AboutComponent,
    OccupationSelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,    
    MatStepperModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    BrowserAnimationsModule, 
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
    TabsModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'products/:id', component: ProductItemComponent},
      { path: 'products', component: ProductsComponent },
      { 
        path: 'shopping-cart',
        component: ShoppingCartComponent,
        canActivate: [AuthGuard] 
      },
      { path: 'quote/:type', component: QuoteComponent },
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
    TermLifeSimulatorService,
    DatePipe,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
