import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { ClienteFormComponent } from 'src/app/shared/cliente-form/cliente-form.component';

@Component({
  selector: 'app-detalhes-cliente',
  templateUrl: './detalhes-cliente.component.html',
  styleUrls: ['./detalhes-cliente.component.css']
})
export class DetalhesClienteComponent implements OnInit {

  cliente!: Cliente;
  id!: number;

  constructor(private clienteService: ClienteService, private route: ActivatedRoute, private router:Router) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.clienteService.getCliente(this.id).subscribe((data) => {
      this.cliente = data.dados;

    })

  }

  inativaCliente(cliente: Cliente) {
    this.clienteService.editarCliente(cliente).subscribe((data) => {
      this.router.navigate(['']);
    })
  }

}
