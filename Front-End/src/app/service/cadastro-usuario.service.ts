import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'model/usuario.model';
import { Observable } from 'rxjs';
import { api } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CadastroUsuarioService {

  constructor(private http: HttpClient) { }

  public save(user: User):Observable<User>{
    return this.http.post<User>(`${api.url}/users`, user)
  }
}
