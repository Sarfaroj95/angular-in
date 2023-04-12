import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {CdkAccordionModule} from '@angular/cdk/accordion';

const MaterialComponents = [
  MatButtonModule,
  MatSlideToggleModule,
  MatButtonModule,
  MatExpansionModule,
  MatCardModule,
  CdkAccordionModule,
];
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})

export class MaterialsModule { }