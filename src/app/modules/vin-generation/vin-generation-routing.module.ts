import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VinGenerationComponent } from './vin-generation.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'vin-generation',
    pathMatch: 'full',
  },
  {
    path: 'vin-generation',
    component: VinGenerationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VinGenerationRoutingModule {}
