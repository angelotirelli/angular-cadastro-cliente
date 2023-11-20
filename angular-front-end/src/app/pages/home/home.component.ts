import { Component, OnInit } from '@angular/core';
import { Cep } from 'src/app/models/cep';
import { Cliente } from 'src/app/models/cliente';
import { CepService } from 'src/app/services/cep.service';
import { ClienteService } from 'src/app/services/cliente.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{

   cep!: Cep;
   clientes: Cliente[] = [];
   clientesGeral: Cliente[] = [];

  constructor (private cepService: CepService,private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(data => {

      this.clientes = data.dados;
      this.clientesGeral = data.dados;

    });
  }

  search(event: Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.clientes = this.clientesGeral.filter(clienteTela => {
      return clienteTela.nome.toLowerCase().includes(value);
    })
  }
}
