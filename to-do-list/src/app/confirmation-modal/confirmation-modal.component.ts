import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogModel } from '../models/DialogModel';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-confirmation-modal',
  imports: [MatButtonModule],
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
    this.dialogRef.close(true);
  }
}
