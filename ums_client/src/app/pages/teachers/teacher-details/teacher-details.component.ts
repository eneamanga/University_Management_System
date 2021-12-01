import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Teacher } from '../../../models/teacher';
import { TeacherService } from '../../../services/teacher.service';


@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.css']
})
export class TeacherDetailsComponent implements OnInit {
  id: number;
  teacher: Teacher;

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

  list(){
    this.router.navigate(['teacher']);
  }

}
