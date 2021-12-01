import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Department } from '../../../models/department';
import { DepartmentService } from '../../../services/department.service';




@Component({
  selector: 'department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {
  id: number;
  department: Department;

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

  list(){
    this.router.navigate(['department']);
  }

}
