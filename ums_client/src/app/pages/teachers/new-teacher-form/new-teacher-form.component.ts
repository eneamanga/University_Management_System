import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from '../../../models/teacher';
import { TeacherService } from '../../../services/teacher.service';




@Component({
  selector: 'app-new-teacher-form',
  templateUrl: './new-teacher-form.component.html',
  styleUrls: ['./new-teacher-form.component.css']
})
export class NewTeacherFormComponent implements OnInit {


 teacher: Teacher = new Teacher();
  submitted = false;

  constructor(private teacherservice: TeacherService,
    private router: Router) { }

  ngOnInit() {
  }

  newTeacher(): void {
    this.submitted = false;
  }

  save() {
    this.teacherservice
    .createTeacher(this.teacher).subscribe(data => {
      this.teacher = new Teacher();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/teacher']);
  }
}

