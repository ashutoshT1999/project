import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogSavedComponent } from '../dialog-saved/dialog-saved.component';

@Component({
  selector: 'app-dialog-delete-ask',
  templateUrl: './dialog-delete-ask.component.html',
  styleUrls: ['./dialog-delete-ask.component.css']
})
export class DialogDeleteAskComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogDeleteAskComponent>, public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  close(): void {
    this.dialog.open(DialogSavedComponent);
    this.dialogRef.close(true);
  }


}
