import { Injectable } from '@angular/core';
//import {HttpClient} from '@angular/common/http';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  // headers: HttpHeaders;
  token :any;

  constructor( private httpClient : HttpClient ){ }
        Base_url = "https://registrations.enovaservers.in/index.php/";
      login(data){
         return this.httpClient.post(this.Base_url+'Api/login_ios',data);

        //  this.token_details();
      }
      otp(data){
        return this.httpClient.post(this.Base_url+'Api/otp_ios',data);
      }
      // token_details(){
      //   this.token =localStorage.getItem('stall_id');
      // this.headers = new HttpHeaders({ 'Authorization': 'Token ' + this.token });
      // }
}
