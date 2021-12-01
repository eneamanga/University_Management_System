import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Course } from '../../models/course';
import { CourseService } from '../../services/courses.service';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit, OnDestroy {


    public courses: Course[];
  
    subs: Subscription[] = [];
  
    constructor(private courseService: CourseService, private router: Router) { }
  
  
    ngOnInit() {
      this.reloadData();
    }
  

    ngOnDestroy() {
      this.subs.forEach(s=>s.unsubscribe());
    }

    
    
    reloadData() {
       let getCourses$ = this.courseService.getCourseList().subscribe(response =>{
         this.courses = response
        });
      }
  
  
      deleteCourse(id: number) {
        let deleteCourse$=this.subs.push(this.courseService.deleteCourse(id)
          .subscribe(
            data => {
              console.log(data);
              this.reloadData();
            },
            error => console.log(error)));
      }
    
      courseDetails(id: number){
        this.router.navigate(['course/details', id]);
      }
    
      updateCourse(id: number){
        this.router.navigate(['course/update', id]);


    
    
      }
    }
    


