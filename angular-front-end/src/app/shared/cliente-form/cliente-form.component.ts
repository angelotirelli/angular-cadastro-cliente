import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { CepModel } from 'src/app/models/cep';
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



  clienteForm!: FormGroup;
  dadosCep!: CepModel;

  customErrorStatematcher = new CustomErrorStateMatcher();

  constructor (private formBuilder: FormBuilder, private cepService: CepService) {}

  ngOnInit(): void {
    this.clienteForm = this.formBuilder.group({
      id:             new FormControl(this.dadosCliente? this.dadosCliente.id             : 0),
      nome:           new FormControl(this.dadosCliente? this.dadosCliente.nome           : '', Validators.required),
      email:          new FormControl(this.dadosCliente? this.dadosCliente.email          : '', Validators.email),
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

  consultaCep(cepDigitado: any) {
    if (cepDigitado) {
      this.cepService.getCep(cepDigitado).subscribe((dados) => {
        this.popularEndereco(dados);
      });
    }
  }

  popularEndereco(dados: CepModel) {
    this.clienteForm.patchValue({
      cep: dados.cep,
      logradouro: dados.logradouro,
      numero: dados.numero,
      complemento: dados.complemento,
      bairro: dados.bairro,
      cidade: dados.localidade,
      uf: dados.uf,
      codigoIbge: dados.ibge,
      gia: dados.gia,
      ddd: dados.ddd,
      siafi: dados.siafi
    })

  }

}
