import { Component, OnInit } from '@angular/core';
import { Job } from '../shared/admin-dashboard'
import { AdminDashboardService } from '../services/admin-dashboard.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-jobdetails',
  templateUrl: './jobdetails.component.html',
  styleUrls: ['./jobdetails.component.css']
})
export class JobdetailsComponent implements OnInit {
  posting:Job[];
  post:Job;

  constructor(private dashboardservice : AdminDashboardService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getJobs();
  }


    getJobs(){
      this.dashboardservice.getJobs().subscribe(
        data=> {
          this.posting = data;
          const id = this.route.snapshot.params.id;
          for(let i=0;i< this.posting.length;i++){
            if(id === this.posting[i]._id){
              this.post = this.posting[i];
            }
          }
        },
        error => console.log(error)
      );
    }
}
