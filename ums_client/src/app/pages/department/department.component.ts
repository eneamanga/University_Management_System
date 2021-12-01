import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Department } from '../../models/department';
import { DepartmentService } from '../../services/department.service';




@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit, OnDestroy {


    public departments: Department[];
  
    subs: Subscription[] = [];
  
    constructor(private departmentService: DepartmentService, private router: Router) { }
  
  
    ngOnInit() {
      this.reloadData();
    }
  

    ngOnDestroy() {
      this.subs.forEach(s=>s.unsubscribe());
    }

    
    
    reloadData() {
       let getDepartments$ = this.departmentService.getDepartmentList().subscribe(response =>{
         this.departments = response
        });
      }
  
  
      deleteDepartment(id: number) {
        let deleteDepartments$=this.subs.push(this.departmentService.deleteDepartment(id)
          .subscribe(
            data => {
              console.log(data);
              this.reloadData();
            },
            error => console.log(error)));
      }
    
      departmentDetails(id: number){
        this.router.navigate(['department/details', id]);
        console.log(id);
      }
    
      updateDepartment(id: number){
        this.router.navigate(['department/update', id]);


    
    
      }
    }
    


