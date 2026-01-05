import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app.routes";
import { AppComponent } from "./app.component";
import { CatalogComponent } from "./features/catalog/catalog.component";
import { CartComponent } from "./features/cart/cart.component";
import { BikeCardComponent } from "./shared/components/bike-card/bike-card.component";
import { CartSummaryComponent } from "./shared/components/cart-summary/cart-summary.component";
import { CurrencyFormatPipe } from "./shared/pipes/currency-format.pipe";

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    CartComponent,
    CartSummaryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, BikeCardComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
