import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Cep } from '../models/cep';
import { Response } from '../models/response';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CepService {

  private apiCep = `${environment.ApiCepUrl}`

  constructor( private http: HttpClient) { }

  getCep(cepDigitado: String = "01001000") : Observable<Response<Cep>> {
    return this.http.get<Response<Cep>>(`${this.apiCep}${cepDigitado}/json`);
  };

}
