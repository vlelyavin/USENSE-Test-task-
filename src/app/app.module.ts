import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputComponent } from './components/passwordInputComponent/passwordInput.component';
import { passwordStrengthComponent } from './components/passwordStrengthComponent/passwordStrength.component';

@NgModule({
  declarations: [AppComponent, InputComponent, passwordStrengthComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
