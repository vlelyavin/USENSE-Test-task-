import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private valueSource = new BehaviorSubject<string>('');
  currentValue = this.valueSource.asObservable();

  constructor() {}

  setValue(value: string) {
    this.valueSource.next(value);
  }
}
