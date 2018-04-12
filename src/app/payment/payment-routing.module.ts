import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent } from './payment.component';
import { PaymentConfirmationComponent } from './payment-confirmation/payment-confirmation.component';
import { PaymentProcessComponent } from './payment-process/payment-process.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { PaymentFailureComponent } from './payment-failure/payment-failure.component';


const routes: Routes = [
  {
    path: '',
    component: PaymentComponent,
    children: [
      {
        path: '',
        redirectTo: 'confirm',
        pathMatch: 'full'
      },
      {
        path: 'confirm',
        component: PaymentConfirmationComponent
      },
      {
        path: 'process',
        component: PaymentProcessComponent
      },
      {
        path: 'success',
        component: PaymentSuccessComponent
      },
      {
        path: 'failure',
        component: PaymentFailureComponent
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
