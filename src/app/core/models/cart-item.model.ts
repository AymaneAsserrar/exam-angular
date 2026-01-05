import { Bike } from "./bike.model";
import { Accessory } from "./accessory.model";

export interface CartItem {
  product: Bike | Accessory;
  quantity: number;
}
