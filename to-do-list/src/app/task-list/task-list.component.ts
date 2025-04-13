import { Component, inject } from '@angular/core';
import { TaskServiceService } from '../services/task-service.service';
import {NgFor} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
@Component({
  selector: 'app-task-list',
  imports: [NgFor, MatButtonModule, MatTabsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  taskService = inject(TaskServiceService);

  Complete(id: number){
    this.taskService.Complete(id);
  }
  Remove(id: number){
    this.taskService.Remove(id);
  }
}
