import { Component, OnInit, Input } from '@angular/core';
import { Students } from 'src/app/models/students';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/students.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  id: number;
  student: Students;

  constructor(private route: ActivatedRoute,private router: Router,
    private studentService: StudentService) { }

  ngOnInit() {
    this.student = new Students();

    this.id = this.route.snapshot.params['id'];
    
    this.studentService.getStudent(this.id)
      .subscribe(data => {
        console.log(data)
        this.student = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['students']);
  }

}
