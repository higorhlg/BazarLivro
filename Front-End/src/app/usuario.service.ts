import { Injectable } from '@angular/core';
import {User} from './../../model/usuario.model';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private http: HttpClient) { }

  public save(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:5000/users', user);
  }

  public getAll(): Observable<User[]> {
     return this.http.get<User[]>('http://localhost:5000/users');
  }

  public getById(user: User): Observable<User> {
    return this.http.get<User>(`http://localhost:5000/users/${user._id}`);
  }

  public authenticate(user: User): Observable<User>{
    return this.http.post<User>('http://localhost:5000/users/authenticate', user);
  }

  public update(user: User): Observable<User>{
     return this.http.patch<User>(`http://localhost:5000/users/${user._id}`, user);
  }

  public delete(user:User): Observable<any> {
    return this.http.delete<User>(`http://localhost:5000/users/${user._id}`);
  }
}
