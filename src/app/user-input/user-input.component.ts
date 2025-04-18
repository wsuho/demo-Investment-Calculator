import { Component,signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { investmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  enteredInitial =signal('0');
  enteredAnnual = signal('0');
  enteredExpect = signal('5');
  enteredDuration = signal('10');

  constructor(private investmentService:investmentService){}

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitial(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpect(),
      annualInvestment: +this.enteredAnnual(),
    });
  }
}
