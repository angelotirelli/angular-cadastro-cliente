import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css'],
})
export class ClienteFormComponent implements OnInit{

  /* envia dados do formulario para persistir*/
  @Output() onSubmit = new EventEmitter<Cliente>();

  @Input() btnAcao!: string;

  @Input() btnTitulo!: string;

  @Input() dadosCliente: Cliente | null = null;

  clienteForm!: FormGroup;

  constructor () {}

  ngOnInit(): void {
    this.clienteForm = new FormGroup({
      id: new FormControl(this.dadosCliente ? this.dadosCliente.id: 0),
      nome: new FormControl(this.dadosCliente ? this.dadosCliente.nome: '', Validators.required),
      email: new FormControl(this.dadosCliente ? this.dadosCliente.email: '', Validators.required),
      dataNascimento: new FormControl(this.dadosCliente ? this.dadosCliente.dataNascimento: '', Validators.required),
      cep: new FormControl(this.dadosCliente ? this.dadosCliente.cep: '', Validators.required),
      ativo: new FormControl(this.dadosCliente ? this.dadosCliente.ativo: true)
    })
  }

  submit() {
    this.onSubmit.emit(this.clienteForm.value);
  }

}
