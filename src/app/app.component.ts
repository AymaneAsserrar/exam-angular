import { Component } from "@angular/core";
import { CartService } from "./core/services/cart.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Bike Shop";
  isCartOpen$ = this.cartService.isCartOpen$;
  cartCount$ = this.cartService.cartCount$;

  constructor(private cartService: CartService) {}

  openCart() {
    this.cartService.openCart();
  }
}
