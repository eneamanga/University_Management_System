import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { TeacherComponent } from 'src/app/pages/teachers/teacher.component';
import { StudentComponent } from '../../pages/students/student.component';
import { NewStudentFormComponent } from '../../pages/students/new-student-form/new-student-form.component';
import { StudentDetailsComponent } from '../../pages/students/student-details/student-details.component';
import { UpdateStudentComponent } from '../../pages/students/update-student/update-student.component';
import { NewTeacherFormComponent } from '../../pages/teachers/new-teacher-form/new-teacher-form.component';
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



export const AdminLayoutRoutes: Routes = [
    { path: 'home',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'teacher',           component: TeacherComponent },
    { path: 'teacher/new',           component: NewTeacherFormComponent },
    { path: 'teacher/details/:id',           component: TeacherDetailsComponent },
    { path: 'teacher/update/:id',           component: UpdateTeacherComponent },
    { path: 'student', component: StudentComponent},
    { path: 'student/new', component: NewStudentFormComponent},
    { path: 'student/details/:id', component: StudentDetailsComponent },
    { path: 'student/update/:id', component: UpdateStudentComponent },
    { path: 'course', component: CourseComponent},
    { path: 'course/new', component: NewCourseFormComponent},
    { path: 'course/details/:id', component: CourseDetailsComponent },
    { path: 'course/update/:id', component: UpdateCourseComponent },
    { path: 'stfield', component: StudyFieldComponent},
    { path: 'stfield/new', component: NewStudyFieldFormComponent},
    { path: 'stfield/details/:id', component: StudyFieldDetailComponent },
    { path: 'stfield/update/:id', component: UpdateStudyFieldComponent },
    { path: 'department', component: DepartmentComponent},
    { path: 'department/new', component: NewDepartmentFormComponent},
    { path: 'department/details/:id', component: DepartmentDetailsComponent },
    { path: 'department/update/:id', component: UpdateDepartmentComponent }
 
];
