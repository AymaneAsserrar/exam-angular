import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CatalogComponent } from "./features/catalog/catalog.component";

const routes: Routes = [
  { path: "", redirectTo: "/catalog", pathMatch: "full" },
  { path: "catalog", component: CatalogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: "enabled" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
