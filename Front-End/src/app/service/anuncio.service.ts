import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Anuncio } from 'model/anuncio.model';
import { Observable } from 'rxjs';
import { api } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService {

  constructor(private http: HttpClient) { }

  public create(anuncio: Anuncio): Observable<Anuncio>{
    return this.http.post<Anuncio>(`${api.url}/announcements`, anuncio)
  }
}
