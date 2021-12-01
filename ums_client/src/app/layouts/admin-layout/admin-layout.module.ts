import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TeacherComponent } from 'src/app/pages/teachers/teacher.component';
import { StudentComponent } from '../../pages/students/student.component';
import { NewStudentFormComponent } from '../../pages/students/new-student-form/new-student-form.component';
import { StudentDetailsComponent } from '../../pages/students/student-details/student-details.component';
import { UpdateStudentComponent } from '../../pages/students/update-student/update-student.component';
import { NewTeacherFormComponent } from '../../pages/teachers/new-teacher-form/new-teacher-form.component';
import { CourseService } from '../../services/courses.service';
import { CourseComponent } from '../../pages/courses/course.component';
import { NewCourseFormComponent } from '../../pages/courses/new-course-form/new-course-form.component';
import { CourseDetailsComponent } from '../../pages/courses/course-details/course-details.component';
import { UpdateCourseComponent } from '../../pages/courses/update-course/update-course.component';
import { TeacherDetailsComponent } from '../../pages/teachers/teacher-details/teacher-details.component';
import { StudyFieldComponent } from '../../pages/studyfield/studyfield.component';
import { NewStudyFieldFormComponent } from '../../pages/studyfield/new-studyfield-form/new-studyfield-form.component';
import { StudyFieldDetailComponent } from '../../pages/studyfield/studyfield-details/studyfield-details.component';
import { UpdateStudyFieldComponent } from '../../pages/studyfield/update-studyfield/update-studyfield.component';
import { DepartmentComponent } from '../../pages/department/department.component';
import { DepartmentDetailsComponent } from '../../pages/department/department-details/department-details.component';
import { UpdateDepartmentComponent } from '../../pages/department/update-department/update-department.component';
import { NewDepartmentFormComponent } from '../../pages/department/new-department-form/new-department-form.component';
import { UpdateTeacherComponent } from '../../pages/teachers/update-teacher/update-teacher.component';





// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    TeacherComponent,
    StudentComponent,
    NewStudentFormComponent,
    StudentDetailsComponent,
    UpdateStudentComponent,
    NewTeacherFormComponent,
    TeacherDetailsComponent,
    UpdateTeacherComponent,
    CourseComponent,
    NewCourseFormComponent,
    CourseDetailsComponent,
    UpdateCourseComponent,
    StudyFieldComponent,
    NewStudyFieldFormComponent,
    StudyFieldDetailComponent,
    UpdateStudyFieldComponent,
    DepartmentComponent,
    DepartmentDetailsComponent,
    UpdateDepartmentComponent,
    NewDepartmentFormComponent



  ]
})

export class AdminLayoutModule {}
