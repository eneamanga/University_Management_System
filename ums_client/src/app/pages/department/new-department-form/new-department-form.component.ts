import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../../../models/department';
import { DepartmentService } from '../../../services/department.service';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'new-department',
  templateUrl: './new-department-form.component.html',
  styleUrls: ['./new-department-form.component.css']
})
export class NewDepartmentFormComponent implements OnInit {

  department: Department = new Department();
  submitted = false;


  constructor(private departmentService: DepartmentService,
    private router: Router) { }

  ngOnInit() {
  }

  newDepartment(): void {
    this.submitted = false;
  }

  save() {
    this.departmentService
    .createDepartment(this.department).subscribe(data => {
      this.department = new Department();
      this.gotoList();
    });
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/department']);
  }
}
