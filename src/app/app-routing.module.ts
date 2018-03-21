import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TermLifeProductComponent } from './term-life-product/term-life-product.component';
import { WholeLifeProductComponent } from './whole-life-product/whole-life-product.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { QuoteComponent } from './quote/quote.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'products/term-life', component: TermLifeProductComponent },
    { path: 'products/whole-life', component: WholeLifeProductComponent },
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
    {
        path: 'profile',
        component: RegisterComponent,
        canActivate: [AuthGuard]
    },


    { path: 'register', component: RegisterComponent },

    {
        path: 'admin/products/new',
        component: ProductFormComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'admin/products/:id',
        component: ProductFormComponent,
        canActivate: [AuthGuard, AdminAuthGuard]
    },
    {
        path: 'admin/products',
        component: AdminProductsComponent,
        canActivate: [AuthGuard, AdminAuthGuard]
    },
    {
        path: 'admin/users/:id',
        component: RegisterComponent,
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