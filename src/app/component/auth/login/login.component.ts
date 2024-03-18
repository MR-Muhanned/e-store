import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Log } from 'src/app/model/log';

import { LoginService } from 'src/app/servess/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  userCredentials: any = {};
  userRegistration: any = {};



  constructor(private userService: LoginService) {}

  onRegister() {
    this.userService.signUp(this.userRegistration).subscribe(
      (response) => {
        console.log(response);
        alert('تم تسجيل الدخول بنجاح 😎');
      },
      (error) => {
        console.error(error);
        alert('خطأ 404 😣');
      }
    );
  }

  onLogin() {
    this.userService.signIn(this.userCredentials).subscribe(
      (response) => {
        console.log(response);
        alert('تم التسجيل بنجاح! 😎');
      },
      (error) => {
        console.error(error);
        alert('حدث خطأ أثناء التسجيل 😣');
      }
    );
  }
}
//   userName:Log = { username: '', password: '' }; // تحديد userName ككائن من نوع Log
//   password: Log = { username: '', password: '' }; // تحديد password ككائن من نوع Log

//   constructor(private mylogin: LoginService) {
//     var first = this.mylogin.onLogin({ username: 'admin1', password: 'admin1' });
//     var second = this.mylogin.onLogin({ username: 'admin2', password: 'admin' });
//   }

// singupUser:any[]=[];
// singupobj:any={
//   userName:'',
//   email:'',
//   password:''
// };
// loginObj:Log={
//   username:'',
//   password:''
// }
//   ngOnInit(): void {
//     // Initialization logic goes here
//     const localData=localStorage.getItem('singupUser');
//     if(localData !=null){
//       this.singupUser=JSON.parse(localData);
//     }
//   }
// //****************************************************************************** */
  





//   //******************************************************************** */
//   onSingup(){
//     this.singupUser.push(this.singupobj)
//     localStorage.setItem('singupUser',JSON.stringify(this.singupUser));
//     this.singupobj={
//       userName:'',
//       email:'',
//       password:''
//     };
//     // const sinuser=localStorage.getItem("singupUser");
//   }
//   onLogin() {
//     var result = this.mylogin.onLogin({ username: this.userName.username, password: this.password.password });
//     debugger;
//     const isUserExist = this.singupUser.find(m => m.userName === this.userName.username && m.password === this.password.password);

//     if (isUserExist !== undefined) {
//       alert('تم تسجيل الدخول بنجاح 😎');
//     } else {
//       alert('خطأ 404 😣');
//     }

//     console.log(result);
//   }





