import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule } from 'angular5-data-table'
import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';
import { PaymentConfirmationComponent } from './payment-confirmation/payment-confirmation.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { PaymentProcessComponent } from './payment-process/payment-process.component';
import { PaymentFailureComponent } from './payment-failure/payment-failure.component';

@NgModule({
    imports: [
        CommonModule,
        PaymentRoutingModule
    ],
    declarations: [PaymentComponent, PaymentConfirmationComponent, PaymentSuccessComponent, PaymentProcessComponent, PaymentFailureComponent]
})
export class PaymentModule { }
