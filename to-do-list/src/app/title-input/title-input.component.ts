import { Component, inject } from '@angular/core';
import { TaskServiceService } from '../services/task-service.service';
import { FormsModule, } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-title-input',
  imports: [FormsModule, MatButtonModule],
  templateUrl: './title-input.component.html',
  styleUrl: './title-input.component.scss'
})
export class TitleInputComponent {
  private taskService: TaskServiceService = inject(TaskServiceService);
  currentTitle = "Title";

  public Add(){
    this.taskService.Add(this.currentTitle);
    this.currentTitle = '';
  }
}
