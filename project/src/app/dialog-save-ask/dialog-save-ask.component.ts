import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogSavedComponent } from '../dialog-saved/dialog-saved.component';

@Component({
  selector: 'app-dialog-save-ask',
  templateUrl: './dialog-save-ask.component.html',
  styleUrls: ['./dialog-save-ask.component.css']
})
export class DialogSaveAskComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogSaveAskComponent>, public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  close(): void {
    this.dialog.open(DialogSavedComponent);
    this.dialogRef.close(true);
  }

}
