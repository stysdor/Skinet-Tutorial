import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { IUser } from '../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = environment.apiUrl;
  private currentUserSource = new BehaviorSubject<IUser>(null);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }

  login(values: any) {
    return this.http.post(this.baseUrl + 'account/login', values).pipe(
      map((user: IUser) => {
        this.setCurrentUser(user);
      }
      ));
  }

  getCurrentUser(): IUser {
    return this.currentUserSource.value;
  }

  loadCurrentUser(token: string) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    return this.http.get(this.baseUrl + 'account', { headers }).pipe(
      map((user: IUser) => {
        this.setCurrentUser(user);
      }));
  }

  register(values: any) {
    return this.http.post(this.baseUrl + 'account/register', values).pipe(
      map((user: IUser) => {
        this.setCurrentUser(user);
      })
    );
  }

  checkEmailExists(email: string) {
    return this.http.get(this.baseUrl + 'account/emailexist?email=' + email);
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUserSource.next(null);
  }

  private setCurrentUser(user: IUser): void {
    if (user) {
      localStorage.setItem('token', user.token);
      this.currentUserSource.next(user);
    }
  }
  
}
