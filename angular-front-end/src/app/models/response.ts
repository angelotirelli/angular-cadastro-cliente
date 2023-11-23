export interface ResponseModel<T> {
  dados: T;
  mensagem: String;
  sucesso: Boolean;
}
