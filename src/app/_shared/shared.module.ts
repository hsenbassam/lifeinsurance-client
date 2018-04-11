import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from '../user-form/user-form.component';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { UserItemComponent } from '../user-item/user-item.component';
import { RouterModule, Routes } from '@angular/router';
import { PasswordChangeComponent } from '../password-change/password-change.component';
import { routes } from './shared-routing.module';

import { CarouselModule } from 'ngx-bootstrap';

import { DatePipe } from '@angular/common';
import {
    MatRadioModule,
    MatSlideToggleModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatRadioModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatSlideToggleModule,
        MatPaginatorModule,
        MatSortModule,
        CarouselModule.forRoot(),
        BsDatepickerModule.forRoot(),
        RouterModule.forChild(routes)
    ],
    declarations: [
        UserFormComponent,
        UserItemComponent,
        PasswordChangeComponent
    ],
    providers: [
        DatePipe
    ],
    exports: [
        UserFormComponent,
        UserItemComponent,
        PasswordChangeComponent,
        DatePipe,
        MatFormFieldModule,
        MatTableModule,
        MatInputModule,
        MatPaginatorModule,
        MatSortModule,
        CarouselModule,
        BsDatepickerModule
    ]
})
export class SharedModule { }
