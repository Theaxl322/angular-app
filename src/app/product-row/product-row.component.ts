import { Component, Input,  HostBinding } from '@angular/core';
import { Product } from '../Product.model';

@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html'
})
export class ProductRowComponent  {
  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'item';

  


}
