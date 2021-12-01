import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teacher } from '../models/teacher';
import { environment } from '../../environments/environment';



@Injectable({
    providedIn: 'root'
  })
  export class TeacherService {
  
    private TEACHER_API = environment.apiUrl  + '/ums/teacher';;
  
    constructor(private http: HttpClient) { }
  
    getTeacher(id: number): Observable<Teacher> { 
      const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin', '*');
      return this.http.get<Teacher>(`${this.TEACHER_API}/get/${id}`,{headers:headers});
    }

    createTeacher(teacher: Teacher): Observable<Object> {
      const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin', '*');
      console.log(teacher);
        return this.http.post(`${this.TEACHER_API}/new`, teacher, {headers:headers});
    }
    
    updateTeacher(id: number, value: any): Observable<Object> {
      const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin', '*');
        return this.http.put(`${this.TEACHER_API}/update/${id}`, value,  {headers:headers});
    }
    
    deleteTeacher(id: number): Observable<any> {
 
        return this.http.delete(`${this.TEACHER_API}/delete/${id}`, { responseType: 'text' },  );
    
    }
    
    getTeachersList(): Observable<Teacher[]> {
      const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin', '*');
    return this.http.get<Teacher[]>(`${this.TEACHER_API}/all`, {headers:headers});
    }


  
  }