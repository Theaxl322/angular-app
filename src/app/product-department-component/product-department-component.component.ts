import { Component, OnInit, Input} from '@angular/core';
import { Product } from '../Product.model';

@Component({
  selector: 'product-department',
  templateUrl: './product-department-component.component.html',
  styleUrls: ['./product-department-component.component.css']
})
export class ProductDepartmentComponentComponent implements OnInit {
  @Input() product: Product;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
