import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from '../shared/admin-dashboard';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {

  constructor(private http: HttpClient) { }

  getJobs():Observable<Job[]> {
    return this.http.get<Job[]>('http://localhost:3000/api/jobs');
  }

  getJob(job:Job):Observable<Job>{
    return this.http.get<Job>(`http://localhost:3000/api/jobs/${job._id}`);
  }

  addJob(job:Job):Observable<Job> {
    return this.http.post<Job>('http://localhost:3000/api/jobs', job);
  }

  editJob(job: Job): Observable<any> {
    return this.http.put(`http://localhost:3000/api/jobs/${job._id}`, job, { responseType: 'text' });
  }

  deleteJob(job: Job): Observable<any> {
    return this.http.delete(`http://localhost:3000/api/jobs/${job._id}`, { responseType: 'text' });
  }
}
