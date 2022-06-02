import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {



  //databse
  db:any = {
    1000: {"acno": 1000, "username":"Anu", "password":1000,"balance":5000},
    1001: {"acno": 1001, "username":"Ammu", "password":1001,"balance":6000},
    1002: {"acno": 1002, "username":"Anju", "password":1002,"balance":7000},
  }

  constructor() { }

  login(acno:any,pswd:any){
    
    let db = this.db;

    if(acno in db){
      if(pswd == db[acno]["password"])
      {
       return true

      }else{
        alert("Incorrect Password")
        return false
      }
    }

    else{
      alert("User does not exist!!")  
      return false  
     }
  }

  //register
register(username:any,acno:any,password:any){
  let db = this.db

  if(acno in db){
    return false
  }else{
    //insert data
    db[acno] = {
      acno,
      username,
      password,
      "balance" :0
    }
    console.log(db);
    
    return true
  }
}

//deposit
deposit(acno:any,password:any,amt:any){
  var amount = parseInt(amt)

  let db = this.db

  if(acno in db){

    if(password == db[acno]["password"]){
      db[acno]["balance"] += amount;
      return db[acno]["balance"]
    }
    else{
      alert("Incorrect password")
      return false
    }
  }
  else{
    alert("User does not exist!!")
  }
}

withdraw(acno:any,password:any,amt:any){
  var amount = parseInt(amt)

  let db = this.db

  if(acno in db){

    if(password == db[acno]["password"])
    {
      if(db[acno]["balance"]>amount)
      {
        db[acno]["balance"] -= amount;
        return db[acno]["balance"]
      }else
      {
        alert("Insufficient balance")
        return false;
      }
     
    }
    else{
      alert("Incorrect password")
      return false
    }
  }
  else{
    alert("User does not exist!!")
  }
}

}