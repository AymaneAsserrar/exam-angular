import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bike } from 'src/app/core/models/bike.model';
import { CurrencyFormatPipe } from '../../pipes/currency-format.pipe';

@Component({
  selector: 'app-bike-card',
  standalone: true,
  imports: [CommonModule, CurrencyFormatPipe],
  templateUrl: './bike-card.component.html',
  styleUrls: ['./bike-card.component.css']
})
export class BikeCardComponent {
  @Input() bike!: Bike;
  @Output() addToCart = new EventEmitter<Bike>();

  onAddToCart() {
    this.addToCart.emit(this.bike);
  }
}