import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  logobj:any ={
    
      "EmailId": "",
      "Password": ""
    
  };

  http= inject(HttpClient);
  router = inject(Router)
  onlogin(){
    // debugger;
    this.http.post("https://freeapi.miniprojectideas.com/api/User/Login",this.logobj).subscribe((res:any)=>{
      if(res.result){
        alert("Login Sucess");
        this.router.navigateByUrl('dashboard')
      }else{
        alert(res.message)
      }
    })

  }

}
