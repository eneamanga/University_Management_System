import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Course } from '../models/course';



@Injectable({
    providedIn: 'root'
  })
  export class CourseService {
  
    private COURSES_API = environment.apiUrl  + '/ums/course';
  
    constructor(private http: HttpClient) { }
  
    getCourse(id: number): Observable<Course> { 
      const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin', '*');
      return this.http.get<Course>(`${this.COURSES_API}/get/${id}`,{headers:headers});
    }

    createCourse(course: Course): Observable<Object> {
      const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin', '*');
        return this.http.post(`${this.COURSES_API}/new`, course, {headers:headers});
    }
    
    updateCourse(id: number, value: any): Observable<Object> {
      const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin', '*');
        return this.http.put(`${this.COURSES_API}/update/${id}`, value,  {headers:headers});
    }
    
    deleteCourse(id: number): Observable<any> {
        return this.http.delete(`${this.COURSES_API}/delete/${id}`, { responseType: 'text' });
    
    }
    
    getCourseList(): Observable<Course[]> {
      const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin', '*');
    return this.http.get<Course[]>(`${this.COURSES_API}/all`, {headers:headers});
    }

    getCourseListAvailable(studentId: number): Observable<Course[]> {
      const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin', '*');
    return this.http.get<Course[]>(`${this.COURSES_API}/allavailable/${studentId}`, {headers:headers});
    }

    getCourseListAttending(studentId: number): Observable<Course[]> {
      const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin', '*');
    return this.http.get<Course[]>(`${this.COURSES_API}/allattending/${studentId}`, {headers:headers});
    }


  
  }