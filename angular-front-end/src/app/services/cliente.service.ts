import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { ClienteModel } from '../models/cliente';
import { ResponseModel } from '../models/response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiClienteUrl = `${environment.ApiClienteUrl}`

  constructor( private http: HttpClient) { }

  getClientes() : Observable<ResponseModel<ClienteModel[]>> {
    return this.http.get<ResponseModel<ClienteModel[]>>(`${this.apiClienteUrl}/retornar`);
  }

  getCliente(id: number) : Observable<ResponseModel<ClienteModel>> {
    return this.http.get<ResponseModel<ClienteModel>>(`${this.apiClienteUrl}/${id}`);
  }

  createCliente(cliente: ClienteModel) : Observable<ResponseModel<ClienteModel[]>> {
    return this.http.post<ResponseModel<ClienteModel[]>>(`${this.apiClienteUrl}/cadastrar`, cliente);
  }

  editarCliente(cliente: ClienteModel) : Observable<ResponseModel<ClienteModel[]>> {
    return this.http.put<ResponseModel<ClienteModel[]>>(`${this.apiClienteUrl}/editar`, cliente);
  }

  inativaCliente(id: number) : Observable<ResponseModel<ClienteModel[]>> {
    return this.http.put<ResponseModel<ClienteModel[]>>(`${this.apiClienteUrl}/inativar/${id}`, id);
  }

  excluirCliente(id: number) : Observable<ResponseModel<ClienteModel[]>> {
    return this.http.delete<ResponseModel<ClienteModel[]>>(`${this.apiClienteUrl}/apagar/${id}`);
  }
}
