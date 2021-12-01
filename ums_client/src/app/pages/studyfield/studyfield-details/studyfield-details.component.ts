import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StudyField } from '../../../models/studyField';
import { StudyFieldService } from '../../../services/studyField.service';



@Component({
  selector: 'app-studyfield-details',
  templateUrl: './studyfield-details.component.html',
  styleUrls: ['./studyfield-details.component.css']
})
export class StudyFieldDetailComponent implements OnInit {
  id: number;
  studyField: StudyField;

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

  list(){
    this.router.navigate(['stfield']);
  }

}
