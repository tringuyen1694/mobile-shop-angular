import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Accounts } from './accounts.model';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Http } from '@angular/http';
import { Headers } from '@angular/http/src/headers';
import { environment } from '../../../environments/environment';

@Injectable()
export class AccountsService {
  private currentAccountSubject = new BehaviorSubject<Accounts>(new Accounts());
  private currentAccount = this.currentAccountSubject.asObservable();

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  private headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(
    private http: Http
  ) { }

  getAuthenticated(account: Accounts) {
    this.http.post(environment.api_url + '/accounts/authenticated', JSON.stringify(account), { headers: this.headers })
      .toPromise().then(res => res.json()).then(data => {
        if (data) {
          this.isAuthenticatedSubject.next(true);
        } else
          this.isAuthenticatedSubject.next(false);
      })
  }

}
