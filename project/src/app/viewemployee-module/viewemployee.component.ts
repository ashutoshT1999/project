import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { empdata } from '../employee-service/employee-service.component';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css'],
  providers:[empdata]
})
export class ViewemployeeComponent implements OnInit {

  empid: string | null = "";
  empbyid:any[]=[];
  constructor(private _route: ActivatedRoute, private _empservice: empdata) { }

  ngOnInit(): void {

    this.empid = this._route.snapshot.paramMap.get('id');
    this.empbyid =this._empservice.getempbyid(this.empid);

  }

}
