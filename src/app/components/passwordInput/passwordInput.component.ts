import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'password-input',
  templateUrl: './passwordInput.component.html',
  styleUrls: ['./passwordInput.component.css'],
})
export class InputComponent {
  value: string;
  public isActive = false;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.currentValue.subscribe((value) => (this.value = value));
  }

  // sets new data service value when input value is changed
  handleChange(event: Event) {
    this.data.setValue((event.target as HTMLInputElement).value);
  }
}
