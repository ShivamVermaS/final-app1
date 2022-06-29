import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserprofileRoutingModule } from './userprofile-routing.module';
import { UserProfileCompoComponent } from './user-profile-compo/user-profile-compo.component';


@NgModule({
  declarations: [
    UserProfileCompoComponent
  ],
  imports: [
    CommonModule,
    UserprofileRoutingModule
  ]
})
export class UserprofileModule { }
