import { Injectable } from '@angular/core';
import { User } from 'model/usuario.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { api } from 'src/environments/environment';
import { Login } from 'model/login.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  public create(user: User): Observable<User> {
    return this.http.post<User>(`${api.url}/users`, user);
  }

  public login(login: Login): Observable<Login>{
    return this.http.post<Login>(`${api.url}/users/authenticate`, login)
  }
}
