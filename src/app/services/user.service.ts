import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../shared/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/api/users', user);
  }

  login(credentials): Observable<any> {
    return this.http.post('http://localhost:3000/api/login', credentials);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/api/users');
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/api/users', user);
  }

  getUser(user: User): Observable<User> {
    return this.http.get<User>(`http://localhost:3000/api/users/${user._id}`);
  }

  editUser(user: User): Observable<any> {
    return this.http.put(`http://localhost:3000/api/users/${user._id}`, user, { responseType: 'text' });
  }

  deleteUser(user: User): Observable<any> {
    return this.http.delete(`http://localhost:3000/api/users/${user._id}`, { responseType: 'text' });
  }
}

