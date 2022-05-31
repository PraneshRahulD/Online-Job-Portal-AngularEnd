import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../shared/user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User();
  users: User[] = [];

  isLoading = true;
  isEditing = false;


  form = new FormGroup({
    
    username : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required]),
    password : new FormControl('', [Validators.required]),
    mobile : new FormControl('', [Validators.required]),
    address : new FormControl('', [Validators.required]),
    city : new FormControl('', [Validators.required]),
    state : new FormControl('', [Validators.required]),
    pincode : new FormControl('', [Validators.required]),
    country : new FormControl('', [Validators.required]),
    years : new FormControl('', [Validators.required]),
    skills : new FormControl('', [Validators.required]),
    resume : new FormControl('', [Validators.required]),
    curemp : new FormControl('', [Validators.required]),
    designation : new FormControl('', [Validators.required]),
    desc : new FormControl('', [Validators.required]),
    months: new FormControl('', [Validators.required]),
    preemp: new FormControl('', [Validators.required]),
    desc1 : new FormControl('', [Validators.required]),
    months1: new FormControl('', [Validators.required]),
    college : new FormControl('', [Validators.required]),
    passed : new FormControl('', [Validators.required]),
    graduated : new FormControl('', [Validators.required]),
    qualifications : new FormControl('', [Validators.required]),
    certifications : new FormControl('', [Validators.required])
      
  });


  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    
  }

  addUser() {
    this.userService.register(this.form.value).subscribe(
      res => {
        this.users.push(res);
        window.alert("successfully registered");
        console.log(this.form.value);
        this.router.navigate(['/']);
      },
      err => window.alert("username already exists!")
    );
  }
  


}
