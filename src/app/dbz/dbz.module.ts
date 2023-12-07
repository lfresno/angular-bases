import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; //aunque esté un mismo módulo importado en varios sitios, eso no afecta al rendimiento
//solo se importa una vez y se reutiliza



import { MainPageComponent } from './pages/main-page.component';

@NgModule({
  declarations: [
    MainPageComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
