import { Injectable } from "@angular/core";
import { Bike } from "../models/bike.model";
import { CartItem } from "../models/cart-item.model";

@Injectable({
  providedIn: "root",
})
export class CartService {
  private cartItems: CartItem[] = [];

  addToCart(bike: Bike): void {
    const existingItem = this.cartItems.find(
      (item) => item.bike.id === bike.id
    );
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({ bike, quantity: 1 });
    }
  }

  removeFromCart(bikeId: number): void {
    this.cartItems = this.cartItems.filter((item) => item.bike.id !== bikeId);
  }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  getTotalPrice(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.bike.price * item.quantity,
      0
    );
  }

  clearCart(): void {
    this.cartItems = [];
  }
}
