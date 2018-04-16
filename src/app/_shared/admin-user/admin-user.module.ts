import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from '../../user-form/user-form.component';
import { UserItemComponent } from '../../user-form/user-item/user-item.component';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SharedModule
  ],
  declarations: [
    UserFormComponent,
    UserItemComponent
  ],
  exports: [
    UserFormComponent,
    UserItemComponent
  ]
})
export class AdminUserModule { }
