import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StudyField } from '../../../models/studyField';
import { StudyFieldService } from '../../../services/studyField.service';


@Component({
  selector: 'update-studyfield',
  templateUrl: './update-studyfield.component.html',
  styleUrls: ['./update-studyfield.component.css']
})
export class UpdateStudyFieldComponent implements OnInit {

  id: number;
  studyField: StudyField;

  subs: Subscription[] = [];

  constructor(private route: ActivatedRoute,private router: Router,
    private studyFieldService: StudyFieldService) { }

  ngOnInit() {
    
    
    this.studyField = new StudyField();

    this.id = this.route.snapshot.params['id'];

    
    this.studyFieldService.getStudyField(this.id)
      .subscribe(data => {
        console.log(data)
        this.studyField = data;
      }, error => console.log(error));

  }

  updateStudyField() {
    this.studyFieldService.updateStudyField(this.id, this.studyField)
      .subscribe(data => {
        console.log(data);
        this.studyField = new StudyField();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateStudyField();    
  }

  gotoList() {
    this.router.navigate(['/stfield']);
  }


}
