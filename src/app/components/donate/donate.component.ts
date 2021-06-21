import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {
  //takes input for name, desc
  @Input()
  name!: string;
  @Input() 
  desc!: string;

  constructor() { }

  ngOnInit(): void {
    
  }
}