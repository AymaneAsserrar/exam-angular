import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Bike } from "src/app/core/models/bike.model";
import { Accessory } from "src/app/core/models/accessory.model";
import { CurrencyFormatPipe } from "../../pipes/currency-format.pipe";

@Component({
  selector: "app-bike-card",
  standalone: true,
  imports: [CommonModule, CurrencyFormatPipe],
  templateUrl: "./bike-card.component.html",
  styleUrls: ["./bike-card.component.css"],
})
export class BikeCardComponent {
  @Input() product!: Bike | Accessory;
  @Output() addToCart = new EventEmitter<Bike | Accessory>();

  onAddToCart() {
    this.addToCart.emit(this.product);
  }
}
