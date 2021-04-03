import { Component, OnInit } from '@angular/core';
import {GetDetailsService} from '../get-details.service'

export class User {
  constructor(
      public userId : number,
      public name : String,
      public nic : String,
      public mobile : number,
      public monthlySalary : number | any,
      public retiredDate : Date,
      public yearsOfService : number,
      public pension : number | any

  ){}
}


@Component({
  selector: 'app-getalldetails',
  templateUrl: './getalldetails.component.html',
  styleUrls: ['./getalldetails.component.css']
})
export class GetalldetailsComponent implements OnInit {
  Users: User[] = [];
  

  constructor(
    private getervice : GetDetailsService,    
    
    ) { }

  ngOnInit(): void {
    this.onSubmit();
  }

  onSubmit(){

    this.getervice.getAll()
    .subscribe(
        // data => {this.allUsers = data},
      //  data => console.log('ucce',data),    
      
      // error => this.errorMsg = error.statusText,   

       (response) =>{
         console.log(response);
         this.Users = response.data;
        }
      );  
  }

}
