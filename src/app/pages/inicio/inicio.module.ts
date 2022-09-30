import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
  },
];

@NgModule({
  declarations: [InicioComponent, CadastroComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes), 
    FormsModule, ReactiveFormsModule],
})
export class InicioModule {}
