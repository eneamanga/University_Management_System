import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { StudyField } from '../models/studyField';


@Injectable({
    providedIn: 'root'
  })
  export class StudyFieldService {
  
    private STUDYFIELD_API = environment.apiUrl  + '/ums/stfield';
  
    constructor(private http: HttpClient) { }
  
    getStudyField(id: number): Observable<StudyField> { 
      const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin', '*');
      return this.http.get<StudyField>(`${this.STUDYFIELD_API}/get/${id}`,{headers:headers});
    }

    createStudyField(studyField: StudyField): Observable<Object> {
      const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin', '*');
        return this.http.post(`${this.STUDYFIELD_API}/new`, studyField, {headers:headers});
    }
    
    updateStudyField(id: number, value: any): Observable<Object> {
      const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin', '*');
        return this.http.put(`${this.STUDYFIELD_API}/update/${id}`, value,  {headers:headers});
    }
    
    deleteStudyField(id: number): Observable<any> {
        return this.http.delete(`${this.STUDYFIELD_API}/delete/${id}`, { responseType: 'text' });
    
    }
    
    getStudyFieldList(): Observable<StudyField[]> {
      const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin', '*');
    return this.http.get<StudyField[]>(`${this.STUDYFIELD_API}/all`, {headers:headers});
    }




  
  }