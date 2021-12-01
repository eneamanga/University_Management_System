import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Teacher } from '../../models/teacher';
import { TeacherService } from '../../services/teacher.service';


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit, OnDestroy {
 

    public teachers: Teacher[];
  
    subs: Subscription[] = [];
  
    constructor(private teacherService: TeacherService, private router: Router) { }
  
  
    ngOnInit() {
      this.reloadData();
    }
  
    ngOnDestroy() {
      this.subs.forEach(s=>s.unsubscribe());
    }
  
  
  
  
    reloadData() {
       let getTeachers$ = this.teacherService.getTeachersList().subscribe(response =>{
         this.teachers = response
        });
      }
  
  
      deleteTeacher(id: number) {
       let getTeacher$= this.subs.push(this.teacherService.deleteTeacher(id)
          .subscribe(
            data => {
              console.log(data);
              this.reloadData();
            },
            error => console.log(error)));
      }
    
      teacherDetails(id: number){
        this.router.navigate(['teacher/details', id]);
      }
    
      updateTeacher(id: number){
        this.router.navigate(['teacher/update', id]);
      }
    }
    
   
   
  
  