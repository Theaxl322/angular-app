import { Component,  Input} from '@angular/core';
import { Product } from '../Product.model';

@Component({
  selector: 'product-department',
  templateUrl: './product-department-component.component.html',
  styleUrls: ['./product-department-component.component.css']
})
export class ProductDepartmentComponentComponent  {
  @Input() product: Product;

  

}
