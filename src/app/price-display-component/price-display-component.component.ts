import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'price-display-component',
  templateUrl: './price-display-component.component.html',
  styleUrls: ['./price-display-component.component.css']
})
export class PriceDisplayComponentComponent implements OnInit {
  @Input() price: number;
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
