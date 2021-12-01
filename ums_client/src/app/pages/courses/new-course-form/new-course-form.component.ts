import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../../../models/course';
import { CourseService } from '../../../services/courses.service';


@Component({
  selector: 'new-student',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {

  course: Course = new Course();
  submitted = false;

  constructor(private courseService: CourseService,
    private router: Router) { }

  ngOnInit() {
  }

  newCourset(): void {
    this.submitted = false;
  }

  save() {
    this.courseService
    .createCourse(this.course).subscribe(data => {
      this.course = new Course();
      this.gotoList();
    });
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/course']);
  }
}
