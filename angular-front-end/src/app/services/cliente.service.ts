import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/cliente';
import { Response } from '../models/response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiClienteUrl = `${environment.ApiClienteUrl}`

  constructor( private http: HttpClient) { }

  getClientes() : Observable<Response<Cliente[]>> {
    return this.http.get<Response<Cliente[]>>(`${this.apiClienteUrl}/retornar`);
  }

  getCliente(id: number) : Observable<Response<Cliente>> {
    return this.http.get<Response<Cliente>>(`${this.apiClienteUrl}/${id}`);
  }

  createCliente(cliente: Cliente) : Observable<Response<Cliente[]>> {
    return this.http.post<Response<Cliente[]>>(`${this.apiClienteUrl}/cadastrar`, cliente);
  }

  editarCliente(cliente: Cliente) : Observable<Response<Cliente[]>> {
    return this.http.put<Response<Cliente[]>>(`${this.apiClienteUrl}/editar`, cliente);
  }

  inativaCliente(id: number) : Observable<Response<Cliente[]>> {
    return this.http.get<Response<Cliente[]>>(`${this.apiClienteUrl}/inativa/${id}`);
  }
}
