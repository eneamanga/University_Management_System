import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Department } from '../models/department';


@Injectable({
    providedIn: 'root'
  })
  export class DepartmentService {
  
    private DEPARTMENT_API = environment.apiUrl  + '/ums/dep';
  
    constructor(private http: HttpClient) { }
  
    getDepartment(id: number): Observable<Department> { 
      const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin', '*');
      return this.http.get<Department>(`${this.DEPARTMENT_API}/get/${id}`,{headers:headers});
    }

    createDepartment(department: Department): Observable<Object> {
      const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin', '*');
        return this.http.post(`${this.DEPARTMENT_API}/new`, department, {headers:headers});
    }
    
    updateDepartment(id: number, value: any): Observable<Object> {
      const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin', '*');
        return this.http.put(`${this.DEPARTMENT_API}/update/${id}`, value,  {headers:headers});
    }
    
    deleteDepartment(id: number): Observable<any> {
        return this.http.delete(`${this.DEPARTMENT_API}/delete/${id}`, { responseType: 'text' });
    
    }
    
    getDepartmentList(): Observable<Department[]> {
      const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin', '*');
    return this.http.get<Department[]>(`${this.DEPARTMENT_API}/all`, {headers:headers});
    }
}
