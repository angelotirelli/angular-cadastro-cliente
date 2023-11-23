import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ClienteModel } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent implements OnInit{

  inputData: any;
  cliente!: ClienteModel;

  constructor(private clienteService: ClienteService,
              private router: Router,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private ref: MatDialogRef<ExcluirComponent>
  ) {}

  ngOnInit(): void {
   this.inputData = this.data;

   this.clienteService.getCliente(this.inputData.id).subscribe((data) =>{
    this.cliente = data.dados;
   });
  }

  excluirCliente() {
    this.clienteService.excluirCliente(this.inputData.id).subscribe((data) => {
      this.ref.close();
      window.location.reload();
    });
  }

  cancelarExclusao() {
    this.ref.close();
  }


}
