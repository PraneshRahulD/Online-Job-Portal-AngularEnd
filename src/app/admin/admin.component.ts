import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators, FormControlName } from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit { 
   adminlog:FormGroup;
   username =new FormControl('',[Validators.required]);
   password= new FormControl('',[Validators.required]);

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit():void  {
    this.adminlog =this.formBuilder.group({
     username:this.username,
     password:this.password 
    });
  }


  login(){
 if(this.username.value==="thomas" && this.password.value ==="shelby"){
   this.router.navigate(['/dashboard']);
 }
  }
}
 


