import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Transacao} from 'model/transacao.model';
import { HttpClient } from '@angular/common/http';
import { api } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransacaoService {

  constructor(private http: HttpClient) { }

  public save(transacao: Transacao): Observable<Transacao> {
    return this.http.post<Transacao>(`${api.url}/transactions`, transacao);
  }
  public getAll(): Observable<Transacao[]> {
    return this.http.get<Transacao[]>(`${api.url}/transactions`);
  }
  public update(transacao: Transacao): Observable<Transacao> {
    return this.http.patch<Transacao>(`${api.url}/transactions/${transacao._id}`, transacao);
  }
  public delete(transacao: Transacao): Observable<any> {
    return this.http.delete<Transacao>(`${api.url}/transactions/${transacao._id}`,);
  }
  public getByUser(userId:string): Observable<Transacao[]>{
    return this.http.get<Transacao[]>(`${api.url}/transactions/user/${userId}`)
  }

}
