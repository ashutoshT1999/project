import { Component, OnInit } from '@angular/core';
import { empdata } from '../employee-service/employee-service.component';

@Component({
  selector: 'app-employeetable-module',
  templateUrl: './employeetable-module.component.html',
  styleUrls: ['./employeetable-module.component.css'],
  providers:[empdata]
})
export class EmployeetableModuleComponent implements OnInit {

  constructor(public _empdata:empdata) { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['code','fullname','Actions'];
  dataSource = this._empdata.getdata();

}
