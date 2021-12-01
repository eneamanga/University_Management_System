import { ChangeDetectionStrategy } from '@angular/compiler/src/compiler_facade_interface';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interval, Subscription, switchMap, timer } from 'rxjs';
import { Students } from 'src/app/models/students';
import { StudentService } from 'src/app/services/students.service';
import { Course } from '../../../models/course';
import { StudentCourse } from '../../../models/studentCourse';
import { CourseService } from '../../../services/courses.service';


@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit, OnDestroy {

  id: number;
  student: Students;
  studentCourse: StudentCourse;
  coursesAvailable: Course[];
  coursesAttending: Course[];

  subs: Subscription[] = [];

  constructor(private route: ActivatedRoute, private router: Router,
    private studentService: StudentService, private courseService: CourseService, private cd: ChangeDetectorRef) { }

  ngOnInit() {

    this.student = new Students();

    this.id = this.route.snapshot.params['id'];


    this.subs.push(this.studentService.getStudent(this.id)
      .subscribe(data => {
        console.log(data)
        this.student = data;
      }));
    this.reloadCourseAvailableTable();
    this.reloadCourseAttendinTable();
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  updateStudent() {
    this.subs.push(this.studentService.updateStudent(this.id, this.student)
      .subscribe(data => {
        console.log(data);
        this.student = new Students();
        this.gotoList();
      }));
  }

  onSubmit() {
    this.updateStudent();
  }

  gotoList() {
    this.router.navigate(['/student']);
  }


  reloadCourseAvailableTable() {
    // let getCourses$ = this.courseService.getCourseListAttending(this.id).subscribe(response => {
    //   this.coursesAvailable = response
    // });
    // this.subs.push(getCourses$);
    this.courseService.getCourseList().pipe(
      switchMap(
       () =>this.courseService.getCourseListAttending(this.id),
        (courseList, selecedCourse) => ({
          courseList,
          selecedCourse
        })
      )
    ).subscribe(resp =>  {
      this.coursesAttending = resp.selecedCourse;
      this.coursesAvailable = resp.courseList.filter(course => !this.coursesAttending.includes(this.coursesAttending.find(c=>c.id==course.id) ))
      console.log(resp);

    });
      
  }

  reloadCourseAttendinTable() {
    let getCourses$ = this.courseService.getCourseListAttending(this.id).subscribe(response => {
      this.coursesAttending = response
    });
    this.subs.push(getCourses$);
  }

  addCourseToStudent(course: Course,  studentId: number) {
    this.studentCourse = new StudentCourse();
    this.studentCourse.courseId = course.id;
    this.studentCourse.studentId = studentId;
    this.subs.push(this.studentService.addCourseToStudent(this.studentCourse).subscribe(resp => {
      console.log(resp);
      this.coursesAvailable = this.coursesAvailable.filter(course=> course.id != this.studentCourse.courseId);
      this.coursesAttending.push(course);
      this.cd.detectChanges();
    }));
  }

  removeCourseFromStudent(course: Course, studentId: number) {
    this.studentCourse = new StudentCourse();
    this.studentCourse.courseId = course.id;
    this.studentCourse.studentId = studentId;
    this.subs.push(this.studentService.removeCourseFromStudent(this.studentCourse).subscribe(resp => {
      console.log("DELETEDD");

      this.coursesAttending = this.coursesAttending.filter(course=> course.id != this.studentCourse.courseId);
      this.coursesAvailable.push(course);
      this.cd.detectChanges();
      // this.reloadCourseAttendinTable();
      // this.reloadCourseAvailableTable();
    }));
  }

}


