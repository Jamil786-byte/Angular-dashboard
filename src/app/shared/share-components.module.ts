import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildHookComponent } from '../modules/main-dashboard/child-hook/child-hook.component';

const app_components = [ChildHookComponent];

@NgModule({
  declarations: [ChildHookComponent],
  imports: [CommonModule],
  exports: [app_components],
})
export class ShareComponentsModule {}
