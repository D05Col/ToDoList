import { Component, inject } from '@angular/core';
import { TaskServiceService } from '../services/task-service.service';
import { FormsModule, } from '@angular/forms';

@Component({
  selector: 'app-title-input',
  imports: [FormsModule],
  templateUrl: './title-input.component.html',
  styleUrl: './title-input.component.sass'
})
export class TitleInputComponent {
  private taskService: TaskServiceService = inject(TaskServiceService);
  currentTitle = "Title";

  public Add(){
    this.taskService.Add(this.currentTitle);
    this.currentTitle = '';
  }
}
