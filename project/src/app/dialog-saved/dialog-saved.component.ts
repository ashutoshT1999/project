import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-saved',
  templateUrl: './dialog-saved.component.html',
  styleUrls: ['./dialog-saved.component.css']
})
export class DialogSavedComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogSavedComponent>) { }

  ngOnInit(): void {
  }
  close(): void {
    this.dialogRef.close(true);
  }


}
