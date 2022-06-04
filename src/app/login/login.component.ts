import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim = "Perfect Banking Partner"
  accno = "Account Number"
  acno = ""
  pswd =""

  //form group

  loginForm = this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })
  
  
//dependancy inject
  constructor(private router:Router, private ds:DataService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

//user defined function
accnoChange(event:any){
  this.acno = event.target.value;
  console.log(this.acno);
  
}
pswdChange(event:any){
  this.pswd = event.target.value;
  console.log(this.pswd);
  
}


  login(){
    // var acno = this.acno;
    // var pswd = this.pswd;
    var acno = this.loginForm.value.acno;
    var pswd = this.loginForm.value.pswd;
    if(this.loginForm.valid){
      const result = this.ds.login(acno,pswd)
    
    if (result)
    {
      alert("Login successfully")
      this.router.navigateByUrl('dashboard')
    }

  }
}

}
 