import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  /* `credentials` is an object that stores the user's email and password input values from the login
  form. These values are used to authenticate the user's login credentials with Firebase
  Authentication. */
  credentials = {
    email:'',
    password:'',
   
    

  }

  

  showAlert = false
  alertMsg = 'Please wait! We are logging you in '
  alertColor = 'blue'
  inSubmission = false


  constructor(private auth: AngularFireAuth){}
  ngOnInit(): void {
    
  }
  async login(){
    console.log(this.credentials.password,"anything in this",this.credentials.email);
    
    this.showAlert = true
    this.alertMsg = 'Please wait! We are logging you in '
    this.alertColor = 'blue'
    this.inSubmission = true 
    try {
     await  this.auth.signInWithEmailAndPassword(
        this.credentials.email,this.credentials.password
      )
      
    } catch (error) {
      this.inSubmission = false
      this.alertMsg = 'An unexpected  error occured.Please try again later'
      this.alertColor = 'red'
      console.log(error);
      return
      
    }

    this.alertMsg = 'Success! You are now logged in'
    this.alertColor = 'green'

  }

}
