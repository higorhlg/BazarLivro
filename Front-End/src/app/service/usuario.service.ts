import { Injectable } from '@angular/core';
import { User } from 'model/usuario.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { api } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  public save(user: User): Observable<User> {
    return this.http.post<User>(`${api.url}/users`, user);
  }
}
