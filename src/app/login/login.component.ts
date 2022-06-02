import { Component, OnInit } from '@angular/core';
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

  //databse
  // db:any = {
  //   1000: {"accno": 1000, "username":"Anu", "password":1000,"balance":5000},
  //   1001: {"accno": 1001, "username":"Ammu", "password":1001,"balance":6000},
  //   1002: {"accno": 1002, "username":"Anju", "password":1002,"balance":7000},
  // }

  constructor(private router:Router, private ds:DataService) { }

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
    var acno = this.acno;
    var pswd = this.pswd;
    
    const result = this.ds.login(acno,pswd)
    if (result)
    {
      alert("Login successfully")
      this.router.navigateByUrl('dashboard')
    }

  }




}
 