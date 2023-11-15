import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserComponent } from './user/user.component';
import { UserlistComponent } from './userlist/userlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from 'src/app/components/contact/contact.component';
import { CardComponent } from './card/card.component';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { AddressComponent } from './address/address.component';
import { CompanyComponent } from './company/company.component';

@NgModule({
  declarations: [
    UserComponent,
    UserlistComponent,
    ProfileComponent,
    ContactComponent,
    CardComponent,
    FilterPipe,
    AddressComponent,
    CompanyComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    UsersRoutingModule
  ]
})
export class UsersModule {
}
