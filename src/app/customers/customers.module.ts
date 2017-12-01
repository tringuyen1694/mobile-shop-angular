import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersDetailComponent } from './customers-detail/customers-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CustomersListComponent, CustomersDetailComponent]
})
export class CustomersModule { }
