import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-delete-confirm',
  templateUrl: './dialog-delete-confirm.component.html',
  styleUrls: ['./dialog-delete-confirm.component.css']
})
export class DialogDeleteConfirmComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogDeleteConfirmComponent>) { }

  ngOnInit(): void {
  }
  close(): void {
    this.dialogRef.close(true);
  }

}
