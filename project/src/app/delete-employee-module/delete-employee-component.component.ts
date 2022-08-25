import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DialogDeleteAskComponent } from '../dialog-delete-ask/dialog-delete-ask.component';
import { empdata } from '../employee-service/employee-service.component';

@Component({
  selector: 'app-delete-employee-component',
  templateUrl: './delete-employee-component.component.html',
  styleUrls: ['./delete-employee-component.component.css'],
  providers: [empdata]
})
export class DeleteEmployeeComponentComponent implements OnInit {

  empid: string | null = "";
  empbyid: any[] = [];
  constructor(private _route: ActivatedRoute, private _empservice: empdata, public dialog: MatDialog) { }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogDeleteAskComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }


  ngOnInit(): void {

    // this.empid = this._route.snapshot.paramMap.get('id');
    // this.empbyid = this._empservice.getempbyid(this.empid);
     this._empservice.getdata().subscribe((data)=>{this.empbyid = data.filter(x => x.code == this._route.snapshot.paramMap.get('id'))});
    //  this.empbyid =this.empbyapi;

  }

}
