import { Component } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
public login :FormGroup;
details :any;
  constructor(private httpService:HttpServiceService,private navctrl :NavController,private formBuilder:FormBuilder) {
   this.login = this.formBuilder.group({
     username:['',Validators.required],
     mobile:['',Validators.required],
   });

  }
     logForm(){
       let data_value ={
        'username' : this.login.value.username,
        'mobile' :this.login.value.mobile 
       }
       
       this.httpService.login(data_value).subscribe((data) => {
          this.details = data;
         console.log(this.details.data['student_id']);
          localStorage.setItem('id',this.details.data['student_id']);
          this.navctrl.navigateForward('otp');
       },(error) => {
             console.error(error);
            
       });

       
     }
}
