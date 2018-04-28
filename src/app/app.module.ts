import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';

import { LoadingBarHttpModule } from '@ngx-loading-bar/http';
import { LoadingBarModule } from '@ngx-loading-bar/core';


import { ErrorHandler } from '@angular/core';
import { RegisterService } from './_services/register.service';
import { AuthService } from './_services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService as AuthGuard } from './_services/auth-guard.service';
import { NoAccessComponent } from './no-access/no-access.component';
import { AdminAuthGuard } from './_services/admin-auth-guard.service';
import { TermLifeSimulatorService } from './_services/termlife-simulator.service';
import { AboutComponent } from './about/about.component';
import { WholeLifeSimulatorService } from './_services/wholelife-simulator.service';
import { routes } from './app-routing.module';
import { UserService } from './_services/user.service';
import { RoleService } from './_services/role.service';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { PaypalPaymentService } from './_services/paypal.payment.service';
import { ScrollToTopDirective } from './_directives/scroll-to-top.directive';
import { ShoppingCartService } from './_services/shopping-cart.service';
import { OrderService } from './_services/order.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from './_shared/shared.module';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { AdminUserModule } from './_shared/admin-user/admin-user.module';
import { UserPoliciesComponent } from './user-policies/user-policies.component';
import { UniversalLifeSimulatorService } from './_services/universallife-simulator.service';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    LoginComponent,
    FooterComponent,
    AboutComponent,
    PasswordRecoveryComponent,
    ScrollToTopDirective,
    NotFoundComponent,
    NoAccessComponent,
    PasswordChangeComponent,
    UserPoliciesComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
    AdminUserModule,
    FormsModule,
    LoadingBarHttpModule,
    BrowserAnimationsModule,
    LoadingBarModule.forRoot(),
    HttpModule,
    JwtModule.forRoot({
      config: {
        tokenGetter() {
          return localStorage.getItem('token');
        }
      }
    }),
    HttpClientModule,
    RouterModule.forRoot(routes)
    // , { useHash: true }
  ],
  providers: [
    RegisterService,
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    JwtHelperService,
    PaypalPaymentService,
    ShoppingCartService,
    UserService,
    TermLifeSimulatorService,
    WholeLifeSimulatorService,
    UniversalLifeSimulatorService,
    OrderService,
    RoleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
