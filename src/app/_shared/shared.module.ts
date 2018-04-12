import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { routes } from './shared-routing.module';

import { BsDropdownModule, CollapseModule, TabsModule, CarouselModule } from 'ngx-bootstrap';
import { DatePipe } from '@angular/common';
import {
    MatRadioModule,
    MatSlideToggleModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatStepperModule,
    MatSnackBarModule
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatRadioModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatSlideToggleModule,
        MatPaginatorModule,
        MatStepperModule,
        MatRadioModule,
        MatSnackBarModule,
        MatSortModule,
        BsDropdownModule.forRoot(),
        CollapseModule.forRoot(),
        TabsModule.forRoot(),
        CarouselModule.forRoot(),
        BsDatepickerModule.forRoot()
    ],
    declarations: [],
    providers: [
        DatePipe
    ],
    exports: [
        DatePipe,
        MatRadioModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatSlideToggleModule,
        MatPaginatorModule,
        MatStepperModule,
        MatRadioModule,
        MatSnackBarModule,
        MatSortModule,
        CarouselModule,
        BsDatepickerModule,
        TabsModule,
        BsDropdownModule,
        CollapseModule
    ]
})
export class SharedModule { }
