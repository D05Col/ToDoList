import { Component } from '@angular/core';
import { TaskServiceService } from '../services/task-service.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-title-input',
  imports: [],
  templateUrl: './title-input.component.html',
  styleUrl: './title-input.component.sass'
})
export class TitleInputComponent {
  private taskService: TaskServiceService;
  currentTitle: string = "";

  Add(){
    this.taskService.Add(this.currentTitle);
  }

  constructor(private tasksService: TaskServiceService){
    this.taskService = tasksService;
  }
}
