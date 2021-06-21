import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-amount-button',
  templateUrl: './amount-button.component.html',
  styleUrls: ['./amount-button.component.css']
})
export class AmountButtonComponent implements OnInit {
  //takes input for amount to be donated
  @Input()
  amount!: number;

  buttonText!: string;

  constructor() { }

  ngOnInit(): void {
    this.buttonText = "$" + this.amount as string; 
  }

}
