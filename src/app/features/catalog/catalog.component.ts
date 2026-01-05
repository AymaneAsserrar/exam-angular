import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/core/services/bike.service';
import { CartService } from 'src/app/core/services/cart.service';
import { Bike } from 'src/app/core/models/bike.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  bikes: Bike[] = [];

  constructor(private bikeService: BikeService, private cartService: CartService) {}

  ngOnInit(): void {
    this.loadBikes();
  }

  loadBikes(): void {
    this.bikeService.getBikes().subscribe((data: Bike[]) => {
      this.bikes = data;
    });
  }

  addToCart(bike: Bike): void {
    this.cartService.addToCart(bike);
  }
}