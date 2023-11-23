import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteModel } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-detalhes-cliente',
  templateUrl: './detalhes-cliente.component.html',
  styleUrls: ['./detalhes-cliente.component.css']
})
export class DetalhesClienteComponent implements OnInit {

  cliente!: ClienteModel;
  id!: number;

  constructor(private clienteService: ClienteService, private route: ActivatedRoute, private router:Router) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.clienteService.getCliente(this.id).subscribe((data) => {
      this.cliente = data.dados;

    })

  }

  inativaCliente() {
    this.clienteService.inativaCliente(this.id).subscribe((data) => {
      this.router.navigate(['']);
    })
  }

}
