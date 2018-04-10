import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { UserFormComponent } from '../user-form/user-form.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';

const routes: Routes = [
  {
    path: 'admin',
    redirectTo: 'admin/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: AdminComponent,
    children: [
      { path: '', component: DashboardComponent },
    ]
  },
  {
    path: 'orders',
    component: AdminComponent,
    children: [
      { path: '', component: AdminOrdersComponent }
    ]
  },
  {
    path: 'users',
    component: AdminComponent,
    children: [
      { path: '', component: AdminUsersComponent },
      { path: ':id', component: UserFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
