import { Component, OnInit } from '@angular/core';
import { productdataservice } from '../product-service/product-data-component';

@Component({
  selector: 'app-product-table-module',
  templateUrl: './product-table-module.component.html',
  styleUrls: ['./product-table-module.component.css'],
  providers:[productdataservice]
})
export class ProductTableModuleComponent implements OnInit {

  productdatabyapi:any[]=[];
  constructor(private _productdata:productdataservice) { }

  ngOnInit(): void {
    this._productdata.getdata().subscribe((data)=>this.productdatabyapi = data);
  }

  displayedColumns: string[] = ['productCategory', 'productName','btn'];
  // dataSource = this._productdata.getdata();
}
