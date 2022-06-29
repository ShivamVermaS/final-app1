import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CourseListComponent } from './admin/course-list/course-list.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home-content/home-content.module').then(
        (m) => m.HomeContentModule
      ),
  },
  {
    path: 'aboutus',
    loadChildren: () =>
      import('./about-us/about-us.module').then((m) => m.AboutUsModule),
  },
  {
    path: 'Courses',
    loadChildren: () =>
      import('./courses/courses.module').then((m) => m.CoursesModule),
  },
  {
    path: 'userProfile',
    loadChildren: () =>
      import('./userprofile/userprofile.module').then(
        (m) => m.UserprofileModule
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'admin',

    component: AdminComponent,
    children: [{ path: 'list', component: CourseListComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
