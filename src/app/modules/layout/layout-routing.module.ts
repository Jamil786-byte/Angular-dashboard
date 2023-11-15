import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AdminGuard } from 'src/app/shared/guards/admin.guard';
import { AdminChildGuard } from 'src/app/shared/guards/admin-child.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: LayoutComponent },
      {
        path: 'main-dashboard',
        loadChildren: () =>
          import('../../modules/main-dashboard/main-dashboard.module').then(
            (m) => m.MainDashboardModule
          ),
      },
      {
        path: 'orders',
        loadChildren: () =>
          import('../../modules/order/order.module').then((m) => m.OrderModule),
        canLoad: [AdminGuard],
      },
      {
        path: 'users',
        loadChildren: () =>
          import('../../modules/users/users.module').then((m) => m.UsersModule),
        
      },
      {
        path: 'vin-generation',
        loadChildren: () =>
          import('../../modules/vin-generation/vin-generation.module').then(
            (m) => m.VinGenerationModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
