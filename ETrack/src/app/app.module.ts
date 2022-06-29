import { AboutUsModule } from './about-us/about-us.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AuthModule } from './auth/auth.module';
import { UserprofileModule } from './userprofile/userprofile.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesModule } from './courses/courses.module';
import { AdminComponent } from './admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseListComponent } from './admin/course-list/course-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    CourseListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    AboutUsModule,
    CoursesModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    UserprofileModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
