import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css']
})
export class CadastrarClienteComponent {

  btnAcao = "Cadatrar";
  btnTitulo = "Cadastrar Cliente"

  constructor(private clienteService: ClienteService, private router: Router) { }

  createCliente(cliente: Cliente) {
    this.clienteService.createCliente(cliente).subscribe((data =>{
      this.router.navigate(['/']);
    }))
  }

}
