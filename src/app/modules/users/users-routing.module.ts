import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from 'src/app/components/contact/contact.component';
import { AddressComponent } from './address/address.component';
import { CompanyComponent } from './company/company.component';
import { AdminChildGuard } from 'src/app/shared/guards/admin-child.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user-list',
    pathMatch: 'full',
  },
  {
    path: 'contact-us',
    component: ContactComponent,
  },
  {
    path: 'user-list',
    component: UserlistComponent,
  },
  {
    path: 'user-add',
    component: UserComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivateChild: [AdminChildGuard],
    children: [
      {
        path: 'address',
        component: AddressComponent,
      },
      {
        path: 'company',
        component: CompanyComponent,
      },
    ],
  },

  {
    path: 'user-add/:id',
    component: UserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
