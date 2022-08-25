import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, Validator, Validators } from '@angular/forms';
import { emailValidator } from '../reactive-form-validator/email-validator';

@Component({
  selector: 'app-product-module',
  templateUrl: './product-module.component.html',
  styleUrls: ['./product-module.component.css'],
  providers: [FormBuilder]
})
export class ProductModuleComponent implements OnInit {

  constructor(public _fb: FormBuilder) { }

  ngOnInit(): void {
  }

  productForm = this._fb.group({
    email:['',[Validators.required,Validators.email,emailValidator.emailcheckwithparams('gmail.com')]],
    prodname: ['', Validators.required],
    prodcode: ['', Validators.required],
    prodcolor: ['', Validators.required],
    prodcategory: ['', Validators.required],
    profdescription: ['', Validators.required],
    prodprice: ['', [Validators.required, Validators.min(1000),Validators.max(10000)]],
    prodquantity: ['', Validators.required]
  })

  submitproduct(){
    console.log(this.productForm);
  }
}
