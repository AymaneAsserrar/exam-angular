import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BikeService } from "src/app/core/services/bike.service";
import { AccessoryService } from "src/app/core/services/accessory.service";
import { CartService } from "src/app/core/services/cart.service";
import { Bike } from "src/app/core/models/bike.model";
import { Accessory } from "src/app/core/models/accessory.model";
import { forkJoin } from "rxjs";

@Component({
  selector: "app-catalog",
  templateUrl: "./catalog.component.html",
  styleUrls: ["./catalog.component.css"],
})
export class CatalogComponent implements OnInit {
  allProducts: any[] = [];
  filteredProducts: any[] = [];

  searchTerm: string = "";
  selectedCategory: string = "all";
  maxPrice: number | null = null;
  pageTitle: string = "Our Products";

  constructor(
    private bikeService: BikeService,
    private accessoryService: AccessoryService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadData();
    this.route.fragment.subscribe((fragment) => {
      if (fragment === "bikes") {
        this.selectedCategory = "bike";
        this.scrollToProducts();
      } else if (fragment === "accessories") {
        this.selectedCategory = "accessory";
        this.scrollToProducts();
      } else {
        this.selectedCategory = "all";
      }
      this.applyFilters();
    });
  }

  scrollToProducts(): void {
    setTimeout(() => {
      const element = document.getElementById("products");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }

  loadData(): void {
    forkJoin({
      bikes: this.bikeService.getBikes(),
      accessories: this.accessoryService.getAccessories(),
    }).subscribe(({ bikes, accessories }) => {
      const bikesWithCategory = bikes.map((b) => ({ ...b, category: "bike" }));
      const accessoriesWithCategory = accessories.map((a) => ({
        ...a,
        category: "accessory",
      }));

      this.allProducts = [...bikesWithCategory, ...accessoriesWithCategory];
      this.applyFilters();
    });
  }

  applyFilters(): void {
    this.updatePageTitle();
    this.filteredProducts = this.allProducts.filter((product) => {
      const matchesSearch =
        !this.searchTerm ||
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesCategory =
        this.selectedCategory === "all" ||
        product.category === this.selectedCategory;
      const matchesPrice =
        this.maxPrice === null || product.price <= this.maxPrice;

      return matchesSearch && matchesCategory && matchesPrice;
    });
  }

  updatePageTitle(): void {
    switch (this.selectedCategory) {
      case "bike":
        this.pageTitle = "Our Bikes";
        break;
      case "accessory":
        this.pageTitle = "Our Accessories";
        break;
      default:
        this.pageTitle = "Our Products";
        break;
    }
  }

  addToCart(product: Bike | Accessory): void {
    this.cartService.addToCart(product);
  }
}
