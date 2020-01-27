import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './components/course/course.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ViewCourseComponent } from './components/view-course/view-course.component';
import { ECTSFilterPipe } from './filters/ects.filter.pipe';
import { semesterFilterPipe } from './filters/semester.filter.pipe';
import { nameFilterPipe } from './filters/name.filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CourseListComponent,
    HeaderComponent,
    AddCourseComponent,
    AboutComponent,
    nameFilterPipe,
    ECTSFilterPipe,
    semesterFilterPipe,
    ViewCourseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
