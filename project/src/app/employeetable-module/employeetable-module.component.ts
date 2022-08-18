import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteAskComponent } from '../dialog-delete-ask/dialog-delete-ask.component';
import { empdata } from '../employee-service/employee-service.component';

@Component({
  selector: 'app-employeetable-module',
  templateUrl: './employeetable-module.component.html',
  styleUrls: ['./employeetable-module.component.css'],
  providers: [empdata]
})
export class EmployeetableModuleComponent implements OnInit {

  constructor(public _empdata: empdata, public dialog: MatDialog) { }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogDeleteAskComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }


  ngOnInit(): void {
  }
  displayedColumns: string[] = ['code', 'fullname', 'Actions'];
  dataSource = this._empdata.getdata();

}
