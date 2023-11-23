import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClienteModel } from 'src/app/models/cliente';
import { CustomErrorStateMatcher } from 'src/app/resources/custom-state-matcher';
import { CepService } from 'src/app/services/cep.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css'],
})
export class ClienteFormComponent implements OnInit{

  /* envia dados do formulario para persistir*/
  @Output() onSubmit = new EventEmitter<ClienteModel>();

  @Input() btnAcao!: string;

  @Input() btnTitulo!: string;

  @Input() dadosCliente: ClienteModel | null = null;

  @Input() cepDigitado: String = '';

  clienteForm!: FormGroup;

  customErrorStatematcher = new CustomErrorStateMatcher();

  constructor (private cepService: CepService) {}

  ngOnInit(): void {
    this.clienteForm = new FormGroup({
      id:             new FormControl(this.dadosCliente? this.dadosCliente.id             : 0),
      nome:           new FormControl(this.dadosCliente? this.dadosCliente.nome           : '', Validators.required),
      email:          new FormControl(this.dadosCliente? this.dadosCliente.email          : '', Validators.required),
      dataNascimento: new FormControl(this.dadosCliente? this.dadosCliente.dataNascimento : '' ),
      cep:            new FormControl(this.dadosCliente? this.dadosCliente.cep            : '', Validators.required),
      logradouro:     new FormControl(this.dadosCliente? this.dadosCliente.logradouro     : '', Validators.required),
      complemento:    new FormControl(this.dadosCliente? this.dadosCliente.complemento    : '' ),
      numero:         new FormControl(this.dadosCliente? this.dadosCliente.numero         : '', Validators.required),
      bairro:         new FormControl(this.dadosCliente? this.dadosCliente.bairro         : '', Validators.required),
      cidade:         new FormControl(this.dadosCliente? this.dadosCliente.cidade         : '', Validators.required),
      uf:             new FormControl(this.dadosCliente? this.dadosCliente.uf             : '', Validators.required),
      codigoIbge:     new FormControl(this.dadosCliente? this.dadosCliente.codigoIbge     : '', Validators.required),
      ddd:            new FormControl(this.dadosCliente? this.dadosCliente.ddd            : '' ),
      telefone:       new FormControl(this.dadosCliente? this.dadosCliente.telefone       : '' ),
      ativo:          new FormControl(this.dadosCliente? this.dadosCliente.ativo          : true)
    })
  }

  submit() {
    this.onSubmit.emit(this.clienteForm.value);
  }

  searchCEO() {

  }
  buscarEndereco(cep: String) {
    this.cepService.getCep(cep).subscribe((data) =>{
      if(data != null && this.dadosCliente != null) {
        this.dadosCliente.logradouro   = data.logradouro;
        this.dadosCliente.numero       = data.numero;
        this.dadosCliente.complemento  = data.complemento;
        this.dadosCliente.bairro       = data.bairro;
        this.dadosCliente.cidade       = data.localidade;
        this.dadosCliente.uf           = data.uf;
        this.dadosCliente.codigoIbge   = data.ibge;
        this.dadosCliente.ddd          = data.ddd;
      }
    });
  }


}
