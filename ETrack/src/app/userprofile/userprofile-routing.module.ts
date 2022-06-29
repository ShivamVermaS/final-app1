import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileCompoComponent } from './user-profile-compo/user-profile-compo.component';

const routes: Routes = [
  {
    path: 'userPage',
    component: UserProfileCompoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserprofileRoutingModule {}
