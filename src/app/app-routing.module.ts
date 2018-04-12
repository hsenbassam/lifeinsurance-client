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
import { NoAccessComponent } from './no-access/no-access.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { UserFormComponent } from './user-form/user-form.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'products/term-life', component: TermLifeProductComponent },
    { path: 'products/whole-life', component: WholeLifeProductComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'shopping-cart', component: ShoppingCartComponent },
    { path: 'quote/:type', component: QuoteComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: UserFormComponent },
    {
        path: 'checkout',
        component: CheckoutComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'payment',
        loadChildren: './payment/payment.module#PaymentModule',
        canActivate: [AuthGuard]
    },
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
    {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule',
        canActivate: [AuthGuard, AdminAuthGuard]
    },

    { path: 'no-access', component: NoAccessComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'not-found', pathMatch: 'full'}
];

export class AppRoutingModule {}
