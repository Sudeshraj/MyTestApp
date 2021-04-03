import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-edit-dtails',
  templateUrl: './edit-dtails.component.html',
  styleUrls: ['./edit-dtails.component.css']
})
export class EditDtailsComponent implements OnInit {
  Users: any;
  public ms: number | any
  public ys: number | any
  public p: number | any = 0

  userDtails = new FormGroup({
    name: new FormControl(''),
    nic: new FormControl(''),
    mobile: new FormControl(''),
    monthlySalary: new FormControl(''),
    retiredDate: new FormControl(''),
    yearsOfService: new FormControl(''),
    pension: new FormControl('')

  });


  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

  }

  search(nic: string) {
    this.httpClient.get<any>('http://portal.pensions.gov.lk:8091/pension-assignment-api/api/TechnicalAssignment/viewDetailstoEdit/' + nic)
      .subscribe(

        (response) => {
          this.userDtails = new FormGroup({
            name: new FormControl(response['name']),
            nic: new FormControl(response['nic']),
            mobile: new FormControl(response['mobile']),
            monthlySalary: new FormControl(response['monthlySalary']),
            retiredDate: new FormControl(response['retiredDate']),
            yearsOfService: new FormControl(response['yearsOfService']),
            pension: new FormControl(response['pension'])
          })
        });
  }


  update(userForm: User) {

    this.httpClient.put<any>('http://portal.pensions.gov.lk:8091/pension-assignment-api/api/TechnicalAssignment/editDetails', userForm)
      .subscribe(
        (response) => {
          console.log(response);
          this.Users = response;
           this.userDtails.reset();
          alert(response.message);
        }
      );
  }

  abc(userForm: User) {
    // console.log(userForm);

    this.userDtails = new FormGroup({
      name: new FormControl(userForm['name']),
      nic: new FormControl(userForm['nic']),
      mobile: new FormControl(userForm['mobile']),
      monthlySalary: new FormControl(userForm['monthlySalary']),
      yearsOfService: new FormControl(userForm['yearsOfService']),
      retiredDate: new FormControl(userForm['retiredDate']),
      pension: new FormControl(userForm['pension'])
    })

    this.ms = this.userDtails.get('monthlySalary')?.value
    this.ys = this.userDtails.get('yearsOfService')?.value
    this.p = this.ms * this.ys / 30 * 100

    // this.userDtails.get('pension')?.setValue(this.p);
    // this.userDtails.patchValue({pension: this.p});
    // console.log( this.p);

  }

}
