import { Component, inject } from '@angular/core';
import { TaskServiceService } from '../services/task-service.service';
import {NgFor} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
@Component({
  selector: 'app-task-list',
  imports: [NgFor, MatButtonModule, MatTabsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  taskService = inject(TaskServiceService);

  Complete(id: number){
    const dialogModal = this.dialog.open(ConfirmationModalComponent, {
      width: '250px',
      data: {
        message: "Would you like to complete the task?"
      }
    })
    let complete = false;
    dialogModal.afterClosed().subscribe(result => {
      complete = result;
    })

    if (complete){
      this.taskService.Complete(id);
    }
    
  }
  Remove(id: number){
    this.taskService.Remove(id);
  }

  constructor(public dialog: MatDialog){

  }
}
