import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VinGenerationRoutingModule } from './vin-generation-routing.module';
import { VinGenerationComponent } from './vin-generation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [VinGenerationComponent],
  imports: [
    CommonModule,
    VinGenerationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class VinGenerationModule {}
