import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { productdataservice } from '../product-service/product-data-component';
import { emailValidator } from '../reactive-form-validator/email-validator';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
  providers: [productdataservice]
})
export class ProductEditComponent implements OnInit {

  productdata: any[] = [];


  constructor(private _productdata: productdataservice, private _route: ActivatedRoute, private _fb: FormBuilder) { }

  ngOnInit(): void {
    this._productdata.getdata().subscribe((data) => {

      this.productdata = data.filter(x => x.productCode == this._route.snapshot.paramMap.get('id'));
      this.productForm.patchValue({
        email: "abc@gmail.com",
        prodname: this.productdata[0].productName,
        prodcode: this.productdata[0].productCode,
        prodcolor: this.productdata[0].productColor,
        prodcategory: this.productdata[0].productCategory,
        profdescription: this.productdata[0].prodDescription,
        prodprice: this.productdata[0].price,
        prodquantity: this.productdata[0].inStockQuantity
      })


    })

  }

  productForm = this._fb.group({
    email: ['', [Validators.required, Validators.email, emailValidator.emailcheckwithparams('gmail.com')]],
    prodname: ['', Validators.required],
    prodcode: ['', Validators.required],
    prodcolor: ['', Validators.required],
    prodcategory: ['', Validators.required],
    profdescription: ['', Validators.required],
    prodprice: ['', [Validators.required, Validators.min(1000), Validators.max(10000)]],
    prodquantity: ['', Validators.required]
  })







}
