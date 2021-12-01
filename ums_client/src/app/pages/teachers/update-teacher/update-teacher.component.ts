import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Teacher } from '../../../models/teacher';
import { TeacherService } from '../../../services/teacher.service';



@Component({
  selector: 'update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.css']
})
export class UpdateTeacherComponent implements OnInit {

  id: number;
  teacher: Teacher;

  subs: Subscription[] = [];

  constructor(private route: ActivatedRoute,private router: Router,
    private teacherService: TeacherService) { }

  ngOnInit() {
    
    
    this.teacher = new Teacher();

    this.id = this.route.snapshot.params['id'];

    
    this.teacherService.getTeacher(this.id)
      .subscribe(data => {
        console.log(data)
        this.teacher = data;
      }, error => console.log(error));

  }

  updateTeacher() {
    this.teacherService.updateTeacher(this.id, this.teacher)
      .subscribe(data => {
        console.log(data);
        this.teacher = new Teacher();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateTeacher();    
  }

  gotoList() {
    this.router.navigate(['/teacher']);
  }


}
