import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EnrolmentService } from '../enrolment.service';
import { User } from '../user';


@Component({
  selector: 'app-dtails',
  templateUrl: './dtails.component.html',
  styleUrls: ['./dtails.component.css']
})
export class DtailsComponent implements OnInit {
  public ms: number | any
  public ys: number | any
  public p: number | any

  userDtails = new FormGroup({
    name: new FormControl(''),
    nic: new FormControl(''),
    mobile: new FormControl(''),
    monthlySalary: new FormControl(''),
    retiredDate: new FormControl(''),
    yearsOfService: new FormControl(''),
    pension: new FormControl('')

  });
  Users: any;

  constructor(private enrolmentService: EnrolmentService) { }

  ngOnInit(): void {
  }


  onSubmit(uf: User) {
    uf.pension = this.p
    console.log(uf)

    this.enrolmentService.enroll(uf)
    .subscribe(
      (response) => {
        console.log(response);
         this.Users = response;
         this.userDtails.reset();
        alert(response.message);
      }
    );
      // .subscribe(
      //   data => console.log('ucce', data),

      //   // error => this.errorMsg = error.statusText
      //   // (      data: any) => console.log('ucce',data),
      //   // error => this.errorMsg = error.statusText
      // )
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
