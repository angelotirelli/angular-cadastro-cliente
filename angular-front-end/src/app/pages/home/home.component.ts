import { Component, OnInit } from '@angular/core';
import { Cep } from 'src/app/models/cep';
import { CepService } from 'src/app/services/cep.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{

   cep!: Cep;

  constructor (private cepService: CepService) {}

  ngOnInit(): void {

  }


}
