import { Component, OnInit } from "@angular/core";
import { CartService } from "src/app/core/services/cart.service";
import { CartItem } from "src/app/core/models/cart-item.model";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems(): void {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }

  closeCart(): void {
    this.cartService.closeCart();
  }

  removeFromCart(productName: string): void {
    this.cartService.removeFromCart(productName);
    this.loadCartItems();
  }

  calculateTotal(): void {
    this.total = this.cartItems.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
  }

  checkout(): void {
    alert("Thank you for your purchase!");
    this.cartService.clearCart();
    this.loadCartItems();
  }
}
