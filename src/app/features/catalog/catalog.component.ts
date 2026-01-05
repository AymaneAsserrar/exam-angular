import { Component, OnInit } from "@angular/core";
import { BikeService } from "src/app/core/services/bike.service";
import { AccessoryService } from "src/app/core/services/accessory.service";
import { CartService } from "src/app/core/services/cart.service";
import { Bike } from "src/app/core/models/bike.model";
import { Accessory } from "src/app/core/models/accessory.model";

@Component({
  selector: "app-catalog",
  templateUrl: "./catalog.component.html",
  styleUrls: ["./catalog.component.css"],
})
export class CatalogComponent implements OnInit {
  bikes: Bike[] = [];
  accessories: Accessory[] = [];

  constructor(
    private bikeService: BikeService,
    private accessoryService: AccessoryService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.loadBikes();
    this.loadAccessories();
  }

  loadBikes(): void {
    this.bikeService.getBikes().subscribe((data: Bike[]) => {
      this.bikes = data;
    });
  }

  loadAccessories(): void {
    this.accessoryService.getAccessories().subscribe((data: Accessory[]) => {
      this.accessories = data;
    });
  }

  addToCart(product: Bike | Accessory): void {
    this.cartService.addToCart(product);
  }
}
