import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Students } from '../../../models/students';
import { StudentService } from '../../../services/students.service';

@Component({
  selector: 'new-student',
  templateUrl: './new-student-form.component.html',
  styleUrls: ['./new-student-form.component.css']
})
export class NewStudentFormComponent implements OnInit {

  student: Students = new Students();
  submitted = false;

  constructor(private studentService: StudentService,
    private router: Router) { }

  ngOnInit() {
  }

  newStudent(): void {
    this.submitted = false;
  }

  save() {
    this.studentService
    .createStudent(this.student).subscribe(data => {
      this.student = new Students();
      this.gotoList();
    });
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/student']);
  }
}
