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
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { DatePipe } from '@angular/common';
import { DataTableModule } from 'angular5-data-table'

import { BsDropdownModule, CollapseModule, BsDatepickerModule, TabsModule  } from 'ngx-bootstrap';
import { LoadingBarHttpModule } from '@ngx-loading-bar/http';
import { LoadingBarModule } from '@ngx-loading-bar/core';

import { 
  MatStepperModule, 
  MatProgressSpinnerModule, 
  MatRadioModule, 
  MatProgressBarModule, 
  MatSnackBarModule,
  MatSlideToggleModule } from '@angular/material'


import { AppErrorHandler } from './_errors/app-error-handler';
import { ErrorHandler } from '@angular/core';
import { RegisterService } from './_services/register.service';
import { ProductService } from './_services/product.service';
import { CategoryService } from './_services/category.service';
import { AuthService } from './_services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService as AuthGuard  } from './_services/auth-guard.service';
import { NoAccessComponent } from './no-access/no-access.component';
import { AdminAuthGuard } from './_services/admin-auth-guard.service';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteResultComponent } from './quote/quote-result/quote-result.component';
import { TermLifeSimulatorService } from './_services/termlife-simulator.service';
import { CountrySelectComponent } from './utils/country-select/country-select.component';
import { AboutComponent } from './about/about.component';
import { OccupationSelectComponent } from './utils/occupation-select/occupation-select.component';
import { TermLifeProductComponent } from './term-life-product/term-life-product.component';
import { WholeLifeProductComponent } from './whole-life-product/whole-life-product.component';
import { WholeLifeSimulatorService } from './_services/wholelife-simulator.service';
import { routes } from './app-routing.module';
import { UserItemComponent } from './user-item/user-item.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component'
import { UserService } from './_services/user.service';
import { UserFormComponent } from './user-form/user-form.component';
import { RoleService } from './_services/role.service';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { PaymentProcessComponent } from './payment-process/payment-process.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { PaymentConfirmationComponent } from './payment-confirmation/payment-confirmation.component';
import { PaypalPaymentService } from './_services/paypal.payment.service';
import { PaymentFailureComponent } from './payment-failure/payment-failure.component';
import { ScrollToTopDirective } from './_directives/scroll-to-top.directive';
import { ShoppingCartService } from './_services/shopping-cart.service';
import { OrderService } from './_services/order.service';
import { PasswordChangeComponent } from './profile/password-change/password-change.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    PaymentSuccessComponent,
    AdminOrdersComponent,
    LoginComponent,
    FooterComponent,
    NoAccessComponent,
    ProductCardComponent,
    ProductItemComponent,
    QuoteComponent,
    QuoteResultComponent,
    CountrySelectComponent,
    AboutComponent,
    OccupationSelectComponent,
    TermLifeProductComponent,
    WholeLifeProductComponent,
    UserItemComponent,
    AdminUsersComponent,
    UserFormComponent,
    PasswordRecoveryComponent,
    PaymentProcessComponent,
    PaymentConfirmationComponent,
    PaymentFailureComponent,
    ScrollToTopDirective,
    PasswordChangeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,    
    MatStepperModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatRadioModule,
    LoadingBarHttpModule,
    BrowserAnimationsModule, 
    LoadingBarModule.forRoot(),
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
    RouterModule.forRoot(routes)
  ],
  providers: [
    RegisterService,
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    JwtHelperService,
    PaypalPaymentService,
    ProductService,
    ShoppingCartService,
    UserService,
    CategoryService,
    TermLifeSimulatorService,
    WholeLifeSimulatorService,
    OrderService,
    RoleService,
    DatePipe,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
