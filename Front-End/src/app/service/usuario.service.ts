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

  public getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${api.url}/users`);
  }

  public update(user: User): Observable<User>{
    return  this.http.patch<User>(`${api.url}/users/${user._id}`, user);
  }

  public delete(user: User): Observable<any> {
    return this.http.delete<User>(`${api.url}/users/${user._id}`,);
  }

}
 	