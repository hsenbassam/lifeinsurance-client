import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from '../user-form/user-form.component';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { UserItemComponent } from '../user-item/user-item.component';
import { RouterModule, Routes } from '@angular/router'
import { PasswordChangeComponent } from '../password-change/password-change.component';
import { routes } from './shared-routing.module'
import {
    MatRadioModule,
    MatSlideToggleModule
} from '@angular/material'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatRadioModule,
        MatSlideToggleModule,
        BsDatepickerModule.forRoot(),
        RouterModule.forChild(routes)
    ],
    declarations: [
        UserFormComponent,
        UserItemComponent,
        PasswordChangeComponent
    ],
    exports: [
        UserFormComponent
    ]
})
export class SharedModule { }