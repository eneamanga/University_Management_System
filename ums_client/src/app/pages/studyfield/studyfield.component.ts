import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StudyField } from '../../models/studyField';
import { StudyFieldService } from '../../services/studyField.service';



@Component({
  selector: 'app-studyfield',
  templateUrl: './studyfield.component.html',
  styleUrls: ['./studyfield.component.scss']
})
export class StudyFieldComponent implements OnInit, OnDestroy {


    public studyFields: StudyField[];
  
    subs: Subscription[] = [];
  
    constructor(private studyFieldService: StudyFieldService, private router: Router) { }
  
  
    ngOnInit() {
      this.reloadData();
    }
  

    ngOnDestroy() {
      this.subs.forEach(s=>s.unsubscribe());
    }

    
    
    reloadData() {
       let getStudyFields$ = this.studyFieldService.getStudyFieldList().subscribe(response =>{
         this.studyFields = response
        });
      }
  
  
      deleteStudyField(id: number) {
        let deleteStudyField$=this.subs.push(this.studyFieldService.deleteStudyField(id)
          .subscribe(
            data => {
              console.log(data);
              this.reloadData();
            },
            error => console.log(error)));
      }
    
      studyFieldDetails(id: number){
        this.router.navigate(['stfield/details', id]);
      }
    
      updateStudyField(id: number){
        this.router.navigate(['stfield/update', id]);


    
    
      }
    }
    


