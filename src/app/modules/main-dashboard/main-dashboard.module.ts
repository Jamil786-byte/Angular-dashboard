import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainDashboardRoutingModule } from './main-dashboard-routing.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShareComponentsModule } from 'src/app/shared/share-components.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MainDashboardRoutingModule,
    ShareComponentsModule,
    FormsModule
  ],
  providers: [],
})
export class MainDashboardModule {}
