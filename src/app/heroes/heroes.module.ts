import { NgModule } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  exports: [  //no es solo para componentes, tmbn pueden ser otros módulos
    HeroComponent,
    ListComponent
  ],
  imports: [  //módulos externos que se pueden usar
    CommonModule
  ]
})
export class HeroesModule {}
