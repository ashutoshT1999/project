import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DialogSaveAskComponent } from '../dialog-save-ask/dialog-save-ask.component';
import { empdata } from '../employee-service/employee-service.component';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css'],
  providers: [empdata]
})
export class EditemployeeComponent implements OnInit {

  empid: string | null = "";
  empbyid: any[] = [];
  constructor(private _route: ActivatedRoute, private _empservice: empdata, public dialog: MatDialog) { }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogSaveAskComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }


  ngOnInit(): void {

    this.empid = this._route.snapshot.paramMap.get('id');
    this.empbyid = this._empservice.getempbyid(this.empid);

  }
}
