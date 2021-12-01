import { Component, OnInit } from '@angular/core';
import { Students } from '../../models/students';
import { Subscription } from 'rxjs';
import { StudentService } from '../../services/students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  public students: Students[];

  subs: Subscription[] = [];

  constructor(private studentService: StudentService, private router: Router) { }


  ngOnInit() {
    this.reloadData();
  }


  reloadData() {
     let getStudents$ = this.studentService.getStudentsList().subscribe(response =>{
       this.students = response
      });
    }


    deleteStudent(id: number) {
      this.subs.push(this.studentService.deleteStudent(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error)));
    }
  
    studentDetails(id: number){
      this.router.navigate(['student/details', id]);
    }
  
    updateStudent(id: number){
      this.router.navigate(['student/update', id]);
    }
}
