import { Component, OnInit } from '@angular/core';
import { Job } from '../shared/admin-dashboard'
import { JobsDashboardComponent } from '../jobs-dashboard/jobs-dashboard.component';
import { ActivatedRoute } from '@angular/router';
import { AdminDashboardService } from '../services/admin-dashboard.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 posting:Job[];
 text1:string;
 text2:string;
 job=new Job();
  constructor(private route:ActivatedRoute, public dashboardservice:AdminDashboardService) { }

  ngOnInit(): void {
    this.text1=this.route.snapshot.params.text1;
    this.text2=this.route.snapshot.params.text2;
    this.searchjobs();
  }

  searchjobs() {
    this.dashboardservice.getJobs().subscribe(
      data => {this.posting = data;
     for(let i=0;i<this.posting.length;i++){
         this.job=this.posting[i];
       }}
    )}

}
