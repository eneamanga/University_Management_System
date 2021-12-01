import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Course } from '../../../models/course';
import { CourseService } from '../../../services/courses.service';


@Component({
  selector: 'update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {

  id: number;
  course: Course;

  subs: Subscription[] = [];

  constructor(private route: ActivatedRoute,private router: Router,
    private courseService: CourseService) { }

  ngOnInit() {
    
    
    this.course = new Course();

    this.id = this.route.snapshot.params['id'];

    
    this.courseService.getCourse(this.id)
      .subscribe(data => {
        console.log(data)
        this.course = data;
      }, error => console.log(error));

  }

  updateCourse() {
    this.courseService.updateCourse(this.id, this.course)
      .subscribe(data => {
        console.log(data);
        this.course = new Course();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateCourse();    
  }

  gotoList() {
    this.router.navigate(['/course']);
  }


}
