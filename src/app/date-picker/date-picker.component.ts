import { Component } from '@angular/core';
import { MatDatepicker, MatDatepickerToggle } from '@angular/material/datepicker';
import { MatHint, MatInput } from '@angular/material/input';
@Component({
  selector: 'app-date-picker',
  imports: [MatDatepicker, MatInput, MatHint, MatDatepickerToggle],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.sass'
})
export class DatePickerComponent {

}
