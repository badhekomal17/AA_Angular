import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PmoServiceService {

private baseUrl = 'http://localhost:8083/AA';

   constructor(private http: HttpClient) { }
   
   createEmployee(employee: object): Observable<object> {
     return this.http.post(`${this.baseUrl}/AddEmployee`, employee);
   }
}