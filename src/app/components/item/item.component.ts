import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  //takes input for name, desc, price, and hours left for sale
  @Input()
  name!: string;
  @Input() 
  desc!: string;
  @Input()
  price!: number;
  @Input() 
  hoursLeft!: number;

  noticeColor!: string; //default gray color for sales time notice
  costOut!: string; //holds the value of the cost to be displayed
  saleTime!: string; //holds value for time left for sale

  constructor() { }

  ngOnInit(): void {
    //changes color to red if number of hours left for sale is less than 3
    this.noticeColor = (this.hoursLeft < 24) ? "#EB7092" : "#706E6B";
    this.saleTime = (this.hoursLeft > 24) ? "Sale ends in " + Math.ceil(this.hoursLeft / 24) as unknown as string + " days" :
    (this.hoursLeft > 1) ? "Sale ends in " + this.hoursLeft as unknown as number + " hours" :
    "Sale ends in 1 hour";

    //changes cost to be displayed as "Free" if price is 0
    //adds on ".00" if only dollar amount is entered
    this.costOut = (this.price == 0) ? "Free" : 
    (this.price - Math.floor(this.price) == 0) ? "$" + (this.price as unknown as string) + ".00" :
    "$" + (this.price as unknown as string);
  }

}
