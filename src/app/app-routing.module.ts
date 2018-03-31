import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TermLifeProductComponent } from './term-life-product/term-life-product.component';
import { WholeLifeProductComponent } from './whole-life-product/whole-life-product.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AuthGuardService as AuthGuard } from './_services/auth-guard.service';
import { QuoteComponent } from './quote/quote.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { AdminAuthGuard } from './_services/admin-auth-guard.service';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { UserFormComponent } from './user-form/user-form.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { PaymentProcessComponent } from './payment-process/payment-process.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { PaymentConfirmationComponent } from './payment-confirmation/payment-confirmation.component';
import { PaymentFailureComponent } from './payment-failure/payment-failure.component';
import { PasswordChangeComponent } from './profile/password-change/password-change.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'products/term-life', component: TermLifeProductComponent },
    { path: 'products/whole-life', component: WholeLifeProductComponent },
    { path: 'products', component: ProductsComponent },
    {
        path: 'shopping-cart',
        component: ShoppingCartComponent
    },
    { path: 'quote/:type', component: QuoteComponent },
    {
        path: 'checkout',
        component: CheckoutComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'payment/confirm',
        component: PaymentConfirmationComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'payment/process',
        component: PaymentProcessComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'payment/success',
        component: PaymentSuccessComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'payment/failure',
        component: PaymentFailureComponent,
        canActivate: [AuthGuard]
    },
    { path: 'login', component: LoginComponent },
    {
        path: 'profile/passwordRecovery',
        component: PasswordRecoveryComponent
    },
    {
        path: 'profile/passwordChange',
        component: PasswordChangeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'profile',
        component: UserFormComponent,
        canActivate: [AuthGuard]
    },


    { path: 'register', component: UserFormComponent },

    {
        path: 'admin/users/:id',
        component: UserFormComponent,
        canActivate: [AuthGuard, AdminAuthGuard]
    },
    {
        path: 'admin/users',
        component: AdminUsersComponent,
        canActivate: [AuthGuard, AdminAuthGuard]
    },
    {
        path: 'admin/orders',
        component: AdminOrdersComponent,
        canActivate: [AuthGuard, AdminAuthGuard]
    },

    { path: 'no-access', component: NoAccessComponent },

    { path: '**', redirectTo: '' }
]

export class AppRoutingModule { }