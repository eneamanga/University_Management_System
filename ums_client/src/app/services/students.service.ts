import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Students } from '../models/students';
import { environment } from '../../environments/environment';
import { StudentCourse } from '../models/studentCourse';

@Injectable({
    providedIn: 'root'
  })
  export class StudentService {
  
    private STUDENTS_API = environment.apiUrl  + '/ums/student';
    private STUDENTSCOURSE_API = environment.apiUrl  + '/ums/student-course';
  
    constructor(private http: HttpClient) { }
  
    getStudent(id: number): Observable<Students> { 
      const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin', '*');
      return this.http.get<Students>(`${this.STUDENTS_API}/get/${id}`,{headers:headers});
    }

    createStudent(student: Students): Observable<Object> {
      const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin', '*');
      console.log(student);
        return this.http.post(`${this.STUDENTS_API}/new`, student, {headers:headers});
    }
    
    updateStudent(id: number, value: any): Observable<Object> {
      const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin', '*');
        return this.http.put(`${this.STUDENTS_API}/update/${id}`, value,  {headers:headers});
    }
    
    deleteStudent(id: number): Observable<any> {
 
        return this.http.delete(`${this.STUDENTS_API}/delete/${id}`, { responseType: 'text' },  );
    
    }
    
    getStudentsList(): Observable<Students[]> {
      const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin', '*');
    return this.http.get<Students[]>(`${this.STUDENTS_API}/all`, {headers:headers});
    }

    addCourseToStudent(studentCourse: StudentCourse): Observable<Object> {
      const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin', '*');
        return this.http.post(`${this.STUDENTSCOURSE_API}/add`, studentCourse , {headers:headers});
    }

    removeCourseFromStudent(studentCourse: StudentCourse): Observable<string> {
    
        return this.http.delete<string>(`${this.STUDENTSCOURSE_API}/remove/${studentCourse.courseId}/${studentCourse.studentId}` );
    }


  
  }