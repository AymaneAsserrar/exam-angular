import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent {
  email: string = "";
  message: string = "";
  submitted: boolean = false;

  onSubmit() {
    console.log("Contact Form Submitted:", {
      email: this.email,
      message: this.message,
    });
    this.submitted = true;
  }
}
