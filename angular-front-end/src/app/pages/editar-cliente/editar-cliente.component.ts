import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  btnAcao = "Editar";
  btnTitulo = "Editar cliente";
  dadosCliente!: Cliente;

  constructor(private clienteService: ClienteService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id =  Number(this.route.snapshot.paramMap.get('id'));

    this.clienteService.getCliente(id).subscribe((data) => {
      this.dadosCliente = data.dados;

    })
  }

  editarCliente(cliente: Cliente) {
    this.clienteService.editarCliente(cliente).subscribe((data) => {
      this.router.navigate(['/']);
    })
  }

}
