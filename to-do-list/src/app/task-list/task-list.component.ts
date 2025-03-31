import { Component, inject } from '@angular/core';
import { TaskServiceService } from '../services/task-service.service';
import {NgFor} from '@angular/common';
@Component({
  selector: 'app-task-list',
  imports: [NgFor],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.sass'
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
