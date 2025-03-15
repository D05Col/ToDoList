import { Component, Directive } from '@angular/core';
import { TaskServiceService } from '../services/task-service.service';
import { ToDoTask } from '../models/ToDoTask';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [NgFor],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.sass'
})
export class TaskListComponent {
  taskList: ToDoTask[] = [];

  constructor(private taskService: TaskServiceService){
    this.taskList = taskService.GetTasks();
  }

}
