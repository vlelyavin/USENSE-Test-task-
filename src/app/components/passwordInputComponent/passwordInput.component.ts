import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'password-input',
  templateUrl: './passwordInput.component.html',
  styleUrls: ['./passwordInput.component.css'],
})
export class InputComponent {
  value: string;
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.currentValue.subscribe((value) => (this.value = value));
  }

  public isActive = false;

  handleClick() {
    this.isActive = !this.isActive;
  }

  handleChange(event: any) {
    this.data.setValue(event.target.value);
  }
}
