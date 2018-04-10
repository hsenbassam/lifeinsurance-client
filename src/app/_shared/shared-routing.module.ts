import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasswordChangeComponent } from '../password-change/password-change.component';
import { AuthGuardService as AuthGuard } from '../_services/auth-guard.service';



export const routes: Routes = [
    {
        path: 'profile/passwordChange',
        component: PasswordChangeComponent,
        canActivate: [AuthGuard]
    },
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
