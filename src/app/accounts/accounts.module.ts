import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsComponent } from './accounts.component';
import { ShowAccountDirective } from './shared/show-account.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AccountsComponent, ShowAccountDirective]
})
export class AccountsModule { }
