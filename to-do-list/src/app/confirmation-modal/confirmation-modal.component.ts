import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogModel } from '../models/DialogModel';
@Component({
  selector: 'app-confirmation-modal',
  imports: [],
  templateUrl: './confirmation-modal.component.html',
  styleUrl: './confirmation-modal.component.scss'
})
export class ConfirmationModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogModel) {}

  onCancelClick(): void {
    // The value in the close method is observed by components that subscribe,
    // like the task list
    this.dialogRef.close(false);
  }
  onConfirmClick(): void {
    let dialogClosed = this.dialogRef.close(true)
  }
}
