import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminDashboardService } from '../services/admin-dashboard.service';
import { Job } from '../shared/admin-dashboard';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posting:string[];
  post:Job;

 // jobs:string[];
 // job:Job;
  text1:string;
  text2:string;

  itemsPerSlide = 5;
  singleSlideOffset = true;
  noWrap = true;
 
  slides = [ 
    {image: 'assets/images/logo1.png'},
    {image: 'assets/images/logo2.png'},
    {image: 'assets/images/logo3.png'},
    {image: 'assets/images/logo4.png'},
    {image: 'assets/images/logo5.jpg'},
    {image: 'assets/images/logo6.png'},
    {image: 'assets/images/logo7.jpg'},
    {image: 'assets/images/logo12.jpg'},
    {image: 'assets/images/logo9.png'},
    {image: 'assets/images/logo10.jpg'},
   
  ];



  constructor(private httpservice: HttpClient, private dashboardservice:AdminDashboardService,private route:ActivatedRoute,
    public router:Router) { }
   
  ngOnInit(): void {
    this.httpservice.get('http://localhost:3000/api/jobs')
    .subscribe(data=> {
      this.posting= data as string[];
    });
  }
  search(text1,text2){
    this.router.navigate(['/home',text1,text2]);
  }
}
