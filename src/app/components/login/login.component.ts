import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth : AuthService, private router : Router) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email : new FormControl(''),
    password : new FormControl('')
  })

  onSubmit(){
    if(this.loginForm.valid){
      this.auth.login(this.loginForm.value).subscribe((result)=>{
        this.router.navigate(['admin'])
      },(err : Error)=>{
        alert(err.message)
      })
    }
  }

}
