import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productdataservice } from '../product-service/product-data-component';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
  providers: [productdataservice]
})
export class ProductViewComponent implements OnInit {
  
  productdata: any[] = [];
  constructor(private _productdata: productdataservice, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._productdata.getdata().subscribe((data) => this.productdata = data.filter(x => x.productCode == this._route.snapshot.paramMap.get('id')));
  
  }


}
