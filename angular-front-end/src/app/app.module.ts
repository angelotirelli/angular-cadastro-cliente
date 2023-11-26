import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastrarClienteComponent } from './pages/cadastrar-cliente/cadastrar-cliente.component';
import { ClienteFormComponent } from './shared/cliente-form/cliente-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditarClienteComponent } from './pages/editar-cliente/editar-cliente.component';
import { DetalhesClienteComponent } from './pages/detalhes-cliente/detalhes-cliente.component';
import { ErrorStateMatcher } from '@angular/material/core';
import { CustomErrorStateMatcher } from './resources/custom-state-matcher';

/* Angular Material */
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { ExcluirComponent } from './components/excluir/excluir.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastrarClienteComponent,
    ClienteFormComponent,
    EditarClienteComponent,
    DetalhesClienteComponent,
    ExcluirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    NgxMaskDirective
  ],
  providers: [{provide: ErrorStateMatcher, useClass: CustomErrorStateMatcher},
               provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
