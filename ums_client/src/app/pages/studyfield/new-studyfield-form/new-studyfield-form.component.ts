import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudyField } from '../../../models/studyField';
import { StudyFieldService } from '../../../services/studyField.service';



@Component({
  selector: 'new-studyfield',
  templateUrl: './new-studyfield-form.component.html',
  styleUrls: ['./new-studyfield-form.component.css']
})
export class NewStudyFieldFormComponent implements OnInit {

  studyField: StudyField = new StudyField();
  submitted = false;

  constructor(private studyFieldService: StudyFieldService,
    private router: Router) { }

  ngOnInit() {
  }

  newStudyField(): void {
    this.submitted = false;
  }

  save() {
    this.studyFieldService
    .createStudyField(this.studyField).subscribe(data => {
      this.studyField = new StudyField();
      this.gotoList();
    });
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/stfield']);
  }
}
