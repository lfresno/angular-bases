import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; //aunque esté un mismo módulo importado en varios sitios, eso no afecta al rendimiento
//solo se importa una vez y se reutiliza
import { FormsModule } from '@angular/forms';



import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';


@NgModule({
  declarations: [ //no hace falta importar interfaces
    MainPageComponent,
    ListComponent,
    AddCharacterComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
