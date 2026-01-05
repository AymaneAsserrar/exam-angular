import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { BikeService } from "../../core/services/bike.service";
import { Bike } from "../../core/models/bike.model";
import { BikeCardComponent } from "../../shared/components/bike-card/bike-card.component";
import { CartService } from "../../core/services/cart.service";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, RouterModule, BikeCardComponent],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  featuredBikes: Bike[] = [];

  constructor(
    private bikeService: BikeService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.bikeService.getBikes().subscribe((bikes) => {
      // Get 3 random bikes for featured section
      this.featuredBikes = bikes.sort(() => 0.5 - Math.random()).slice(0, 3);
    });
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}
