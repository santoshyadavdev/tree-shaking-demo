import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from './button/button.module';
import { TableModule } from './table/table.module';

@NgModule({
  imports: [CommonModule,TableModule, ButtonModule ],
  declarations: [],
  exports: [TableModule, ButtonModule],
})
export class GodModuleLibModule {}
