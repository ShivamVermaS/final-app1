import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CourseComponent } from './course/course.component';
import { ApplyformComponent } from './applyform/applyform.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CourseComponent, ApplyformComponent],
  imports: [CommonModule, CoursesRoutingModule, ReactiveFormsModule],
})
export class CoursesModule {}
