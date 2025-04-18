import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>();
  enteredInitial = '0';
  enteredAnnual = '0';
  enteredExpect = '5';
  enteredDuration = '10';

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitial,
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpect,
      annualInvestment: +this.enteredAnnual,
    });
  }
}
