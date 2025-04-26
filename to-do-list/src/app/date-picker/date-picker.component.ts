import { Component, inject } from '@angular/core';
import {MatDatepicker, MatDatepickerInputEvent, MatDatepickerModule} from '@angular/material/datepicker'
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { TaskServiceService } from '../services/task-service.service';
@Component({
  selector: 'app-date-picker',
  imports: [MatDatepickerModule, ReactiveFormsModule, MatNativeDateModule, MatDatepicker, FormsModule],
  providers: [MatDatepickerModule, MatNativeDateModule, ReactiveFormsModule],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss'
})
export class DatePickerComponent {
  tasksService: TaskServiceService = inject(TaskServiceService);
  handleDateChange(evt: MatDatepickerInputEvent<Date>){
    this.tasksService.date.set(evt.value ?? new Date());
  }
}
