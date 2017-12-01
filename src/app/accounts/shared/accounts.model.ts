import { Customers } from '../../customers/shared/customers.model';
export class Accounts{
    accountId: number;
    username: string;
    password: string;
    customers: Customers;
}