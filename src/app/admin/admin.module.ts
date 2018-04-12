import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { SharedModule } from '../_shared/shared.module';
import { UserFormComponent } from '../user-form/user-form.component';
import { UserItemComponent } from '../user-form/user-item/user-item.component';
import { PasswordChangeComponent } from '../password-change/password-change.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        AdminRoutingModule
    ],
    declarations: [
        AdminComponent,
        SidebarComponent,
        DashboardComponent,
        AdminOrdersComponent,
        AdminUsersComponent
    ]
})
export class AdminModule { }
