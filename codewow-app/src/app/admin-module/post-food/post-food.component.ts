import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
//import {MatDatepickerModule} from '@angular/material/datepicker';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-post-food',
  templateUrl: './post-food.component.html',
  styleUrls: ['./post-food.component.css']
})
export class PostFoodComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<PostFoodComponent>,private datePipe: DatePipe) { }

  
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    city: new FormControl(''),
    gender: new FormControl('1'),
    department: new FormControl(0),
    hireDate: new FormControl(''),
    isPermanent: new FormControl(false)
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      fullName: '',
      email: '',
      mobile: '',
      city: '',
      gender: '1',
      department: 0,
      hireDate: '',
      isPermanent: false
    });
  }



  ngOnInit(): void {
  }

  

  onClear() {
    this.form.reset();
    this.initializeFormGroup();
  }

  onSubmit() {
      this.onClose();
    }
  

  onClose() {
    this.form.reset();
    this.initializeFormGroup();
    this.dialogRef.close();
  }

}
