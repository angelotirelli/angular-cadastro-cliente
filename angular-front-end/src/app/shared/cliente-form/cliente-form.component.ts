import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit{
  /* envia dados do formulario para persistir*/
  @Output() onSubmit = new EventEmitter<Cliente>();

  clienteForm!: FormGroup;

  constructor () {}

  ngOnInit(): void {
    this.clienteForm = new FormGroup({
      id: new FormControl(0),
      nome: new FormControl(''),
      email: new FormControl(''),
      dataNascimento: new FormControl(''),
      cep: new FormControl(''),
      ativo: new FormControl(true)
    })
  }

  submit() {
    console.log(this.clienteForm);
    this.onSubmit.emit(this.clienteForm.value);
  }

}
