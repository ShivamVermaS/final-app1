import { CourseComponent } from './course/course.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyformComponent } from './applyform/applyform.component';
import { AuthGuardGuard } from '../Security/auth-guard.guard';

const routes: Routes = [
  {
    path: 'course/:id',
    component: CourseComponent,
  },
  {
    path: 'applyForm',
    component: ApplyformComponent,
    canActivate: [AuthGuardGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
