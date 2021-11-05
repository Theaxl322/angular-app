import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { Product } from '../Product.model';

@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {
  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'item';

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
