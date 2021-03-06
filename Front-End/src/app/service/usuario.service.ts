import { Injectable } from '@angular/core';
import { User } from 'model/usuario.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { api } from 'src/environments/environment';
import { HttpXsrfCookieExtractor } from '@angular/common/http/src/xsrf';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { } 
  public create(user: User): Observable<User> {
    return this.http.post<User>(`${api.url}/users`, user);
  }

  public login(user: User): Observable<User>{
    return this.http.post<User>(`${api.url}/users/authenticate`, user)
  }
  public getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${api.url}/users`);
  }
  public getById(id : string) : Observable<User> {
    return this.http.get<User>(`${api.url}/users/${id}`);
  }

  public getByUser(_id : string) : Observable<User> {
    return this.http.get<User>(`${api.url}/users/${_id}`);
  }
  public update(user: User): Observable<User>{
    return  this.http.patch<User>(`${api.url}/users/${user._id}`, user);
  }

  public delete(user: User): Observable<any> {
    return this.http.delete<User>(`${api.url}/users/${user._id}`,);
  }

}
 	