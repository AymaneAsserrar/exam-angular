# Bike Shop E-Commerce Application

A modern, responsive e-commerce application for browsing and purchasing bikes and accessories. Built with Angular 15, this application demonstrates a modular architecture with clear separation of concerns.

## 🚀 Features

- **Interactive Catalog**: Browse a comprehensive collection of bikes and accessories.
- **Shopping Cart Management**: Add items to cart, view summaries, and manage quantities seamlessly.
- **Product Details**: Rich product presentations with `BikeCard` components.
- **Categorization**: distinct handling for Bikes and Accessories.
- **Contact & Support**: Dedicated contact section for customer inquiries.
- **Responsive Layout**: Optimized for various screen sizes.

## 🛠️ Tech Stack

- **Framework**: [Angular 15](https://angular.io/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: CSS3
- **Data**: JSON-based local data storage (Assets)
- **State Management**: RxJS Services

## 📂 Project Structure

```
src/
├── app/
│   ├── core/            # Singleton services and models
│   │   ├── models/      # Data interfaces (Bike, Accessory, CartItem)
│   │   └── services/    # Business logic (Cart, Catalog services)
│   ├── features/        # Feature modules
│   │   ├── cart/        # Shopping cart functionality
│   │   ├── catalog/     # Product listing pages
│   │   ├── contact/     # Contact form and info
│   │   └── home/        # Landing page
│   └── shared/          # Reusable artifacts
│       ├── components/  # Shared UI components (Footer, BikeCard)
│       └── pipes/       # Custom pipes (CurrencyFormat)
├── assets/
│   └── data/            # Static data files (bikes.json, accessories.json)
└── environments/        # Configuration files
```

## 🏁 Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed (v14.20+ or v16.13+ recommended for Angular 15).
- **Angular CLI**: Install globally via `npm install -g @angular/cli`.

### Installation

1.  **Clone the repository**

    ```bash
    git clone <repository-url>
    cd bike-shop
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

### Development Server

Run the application locally:

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build

Build the project for production:

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory.

## 🧪 Running Tests

Execute unit tests via [Karma](https://karma-runner.github.io):

```bash
ng test
```

## 🤝 Contributing

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

This project is licensed under the MIT License.
