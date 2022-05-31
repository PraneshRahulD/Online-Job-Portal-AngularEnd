import { Component, OnInit, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminDashboardService } from '../services/admin-dashboard.service';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {  Job } from '../shared/admin-dashboard';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  
  post = new Job();
  posting : Job[]=[];
  isLoading = true;
  isEditing = false;


  postForm: FormGroup;
  id= new FormControl('', Validators.required);
  title = new FormControl('',Validators.required);
  //desc = new FormControl('',Validators.required);
  //jobdate = new FormControl('',Validators.required);
  role = new FormControl('',Validators.required);
  //responsibility = new FormControl('',Validators.required);
  cname = new FormControl('',Validators.required);
  //experience = new FormControl('',Validators.required);
  salary = new FormControl('',Validators.required);
  //position= new FormControl('',Validators.required);
  location = new FormControl('',Validators.required);
  skills = new FormControl('',Validators.required);
  //degree= new FormControl('',Validators.required);
  //cinfo= new FormControl('',Validators.required);
  //etype = new FormControl('',Validators.required);
  //search = new FormControl('',Validators.required);
  jobdesc= new FormControl('',Validators.required);

  constructor(private http: HttpClient, private dashboardservice:AdminDashboardService,
    private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.postForm= this.formbuilder.group({
     id:this.id,
     title:this.title,
//desc:this.desc,
     //jobdate:this.jobdate,
     role:this.role,
     //responsibility:this.responsibility,
     cname:this.cname,
     //experience:this.experience,
     salary:this.salary,
     //position:this.position,
     location:this.location,
     skills:this.skills,
     //degree:this.degree,
     //cinfo:this.cinfo,
     //etype:this.etype,
     //search:this.search,
     jobdesc:this.jobdesc
    });
    this.getJobs();
  }

  getJobs(){
    this.dashboardservice.getJobs().subscribe(
      data=> this.posting=data,
      error => console.log(error)
    );
  }

  addJob(){
    this.dashboardservice.addJob(this.postForm.value).subscribe(
      res => {
        this.posting.push(res);
        this.postForm.reset();
      },
      error => console.log(error)
    );
  }

  enableEditing(post:Job){
    this.isEditing = true;
    this.post=post;
  }

  cancelEditing(){
    this.isEditing= false;
    this.post= new Job();
    this.getJobs();
  }

  editJob(post:Job){
    this.dashboardservice.editJob(post).subscribe(
      () => {
        this.isEditing=false;
        this.post=post;
        window.alert('Edited Successfully');
      },
      error => console.log(error)
    );
  }

  deleteJob(post:Job) {
    this.dashboardservice.deleteJob(post).subscribe(
      () => {
        this.posting=this.posting.filter(elem => elem._id ! == post._id);
        window.alert('Deleted Successfully');
      },
      error => console.log(error)
    )

  }

}
