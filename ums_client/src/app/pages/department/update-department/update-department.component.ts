import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Department } from '../../../models/department';
import { DepartmentService } from '../../../services/department.service';



@Component({
  selector: 'update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.css']
})
export class UpdateDepartmentComponent implements OnInit {

  id: number;
  department: Department;

  subs: Subscription[] = [];

  constructor(private route: ActivatedRoute,private router: Router,
    private departmentService: DepartmentService) { }

  ngOnInit() {
    
    
    this.department = new Department();

    this.id = this.route.snapshot.params['id'];

    
    this.departmentService.getDepartment(this.id)
      .subscribe(data => {
        console.log(data)
        this.department = data;
      }, error => console.log(error));

  }

  updateDepartment() {
    this.departmentService.updateDepartment(this.id, this.department)
      .subscribe(data => {
        console.log(data);
        this.department = new Department();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateDepartment();    
  }

  gotoList() {
    this.router.navigate(['/department']);
  }


}
