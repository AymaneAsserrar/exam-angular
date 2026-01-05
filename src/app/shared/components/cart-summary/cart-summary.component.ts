import { Component, Input } from '@angular/core';
import { CartItem } from 'src/app/core/models/cart-item.model';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent {
  @Input() cartItems: CartItem[] = [];

  get totalItems(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  get totalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.bike.price * item.quantity), 0);
  }
}