import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { DataTableModule } from 'angular5-data-table';
import { SharedModule } from '../_shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        DataTableModule,
        SharedModule,
        AdminRoutingModule
    ],
    declarations: [AdminComponent, SidebarComponent, DashboardComponent, AdminOrdersComponent, AdminUsersComponent]
})
export class AdminModule { }
