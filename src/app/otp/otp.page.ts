import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpServiceService } from '../http-service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {
  public otp:FormGroup;
  otp_details :any;
  stall_id :any;
  constructor(private httpService:HttpServiceService,private navctrl:NavController,private formBuilder:FormBuilder) { 
     this.otp= this.formBuilder.group({
       otp1:['',Validators.required]
     })
  }
   otp_detail(){
          this.stall_id = localStorage.getItem("id");
         let otp_data ={
           'otp' : this.otp.value.otp1,
           'stall_id':this.stall_id
         }
         this.httpService.otp(otp_data).subscribe((data) =>{
          this.otp_details =data;
          localStorage.setItem('stall_id',this.otp_details.data['stallId']);
          this.navctrl.navigateForward('scan');
         },(error) =>{
            console.error(error);
         });
     }
  ngOnInit() {
  }

}
