import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'password-strength',
  templateUrl: './passwordStrength.component.html',
  styleUrls: ['./passwordStrength.component.css'],
})
export class passwordStrengthComponent implements AfterViewInit {
  @ViewChild('firstLine') firstLine: ElementRef;
  @ViewChild('secondLine') secondLine: ElementRef;
  @ViewChild('thirdLine') thirdLine: ElementRef;

  public passwordComplexity: string = 'this field should not be empty';
  value: string;

  constructor(private data: DataService) {}

  ngAfterViewInit() {
    this.data.currentValue.subscribe((newValue) => {
      this.value = newValue;
      this.handleValueChange(this.value);
    });
  }

  // depending on a str argument, calls toggleLineColor function, which changes the background color of the status lines and password complexity string
  setStatus(str: string) {
    const toggleLineColor = (
      firstLineColor: string,
      secondLineColor: string,
      thirdLineColor: string,
      str: string
    ) => {
      this.firstLine.nativeElement.style.background = firstLineColor;
      this.secondLine.nativeElement.style.background = secondLineColor;
      this.thirdLine.nativeElement.style.background = thirdLineColor;
      this.passwordComplexity = str;
    };

    switch (str) {
      case 'EMPTY': {
        toggleLineColor(
          'var(--lightgray)',
          'var(--lightgray)',
          'var(--lightgray)',
          'this field should not be empty'
        );
        break;
      }
      case 'LESS_THAN_8': {
        toggleLineColor(
          'var(--red)',
          'var(--red)',
          'var(--red)',
          'password should have more than 8 characters'
        );
        break;
      }
      case 'EASY': {
        toggleLineColor(
          'var(--red)',
          'var(--lightgray)',
          'var(--lightgray)',
          'your password is easy'
        );
        break;
      }
      case 'MEDIUM': {
        toggleLineColor(
          'var(--yellow)',
          'var(--yellow)',
          'var(--lightgray)',
          'medium password'
        );
        break;
      }
      case 'STRONG': {
        toggleLineColor(
          'var(--green)',
          'var(--green)',
          'var(--green)',
          'strong password'
        );
        break;
      }
      default:
        break;
    }
  }

  // calls setStatus method depending on the condition
  handleValueChange(value: string) {
    const onlyNumbers = /^\d+$/; // checks if string contains only numbers
    const onlySymbols = /^[^a-zA-Z0-9]+$/; // checks if string contains only symbols
    const onlyLetters = /^[a-zA-Z]+$/; //checks if string contains only letters
    const onlyLettersAndNumbers = /^[A-Za-z0-9]*$/; //letters and numbers only
    const onlyNumbersAndSymbols = /^[^a-zA-Z]+$/; // only numbers and symbols
    const onlySymbolsAndLetters = /^[^\d]+$/; // symbols and letters

    if (value === '') {
      this.setStatus('EMPTY');
    } else if (value.length < 8) {
      this.setStatus('LESS_THAN_8');
    } else if (
      onlyNumbers.test(value) ||
      onlySymbols.test(value) ||
      onlyLetters.test(value)
    ) {
      this.setStatus('EASY');
    } else if (
      onlyLettersAndNumbers.test(value) ||
      onlyNumbersAndSymbols.test(value) ||
      onlySymbolsAndLetters.test(value)
    ) {
      this.setStatus('MEDIUM');
    } else {
      this.setStatus('STRONG');
    }
  }
}
