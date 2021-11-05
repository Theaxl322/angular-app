import { Input,Component, OnInit, EventEmitter,  Output } from '@angular/core';
import { Product } from '../Product.model';

@Component({
  selector: 'products-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  @Input() productList: Product[];
  @Output() onProductSelected: EventEmitter<Product>;
  private currentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  ngOnInit(): void {
  }

  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }


}
