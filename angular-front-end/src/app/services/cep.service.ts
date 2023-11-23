import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { CepModel } from '../models/cep';
import { ResponseModel } from '../models/response';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CepService {

  private apiCep = `${environment.ApiCepUrl}`

  constructor( private http: HttpClient) { }

  getCep(cepDigitado: String = '01001000') : Observable<CepModel> {
    return this.http.get<CepModel>(`${this.apiCep}${cepDigitado}/json`);
  };

}
