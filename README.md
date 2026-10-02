# E-Commerce Backend

A backend for an e-commerce website built with [NestJS](https://nestjs.com/) and TypeScript.

> **Status:** The project is currently a fresh NestJS starter. The sections below describe the planned scope and the modules to be implemented.

## Table of Contents

1. [User Management](#1-user-management)
2. [Product Management](#2-product-management)
3. [Order Management](#3-order-management)
4. [Shopping Cart](#4-shopping-cart)
5. [Payment Processing](#5-payment-processing)
6. [Review and Rating](#6-review-and-rating)
7. [Wishlist](#7-wishlist)
8. [Search and Filtering](#8-search-and-filtering)
9. [Notifications](#9-notifications)
10. [Admin Dashboard](#10-admin-dashboard)
11. [Security](#11-security)
12. [Getting Started](#getting-started)

## Features

### 1. User Management
- User registration
- User login/logout
- User profile management
- Password reset
- Role management (Admin, Customer, etc.)

### 2. Product Management
- Product creation
- Product listing
- Product details
- Product update/delete
- Category management
- Inventory management

### 3. Order Management
- Order placement
- Order history
- Order tracking
- Order cancellation/returns
- Payment integration
- Invoice generation

### 4. Shopping Cart
- Cart management (add/remove items)
- Cart summary
- Checkout process

### 5. Payment Processing
- Integration with payment gateways (e.g., Stripe, PayPal)
- Payment confirmation
- Refund management

### 6. Review and Rating
- Product reviews
- Product ratings
- Review moderation

### 7. Wishlist
- Add to wishlist
- Remove from wishlist
- View wishlist

### 8. Search and Filtering
- Product search
- Product filtering (by category, price, rating, etc.)

### 9. Notifications
- Email notifications (order confirmation, shipping updates, etc.)
- SMS notifications
- In-app notifications

### 10. Admin Dashboard
- User management
- Product management
- Order management
- Sales reports
- Analytics

### 11. Security
- Authentication (JWT, OAuth)
- Authorization
- Data validation
- Error handling
- Logging and monitoring

## Tech Stack

- [NestJS](https://nestjs.com/) 11
- TypeScript
- Jest (unit and e2e testing)
- ESLint + Prettier

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the project

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

### Run tests

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

### Lint and format

```bash
npm run lint
npm run format
```

## Project Structure

```
src/
├── app.module.ts      # Root module
├── app.controller.ts
├── app.service.ts
└── main.ts            # Application entry point
test/                  # e2e tests
```

Each feature above is intended to live in its own Nest module (e.g. `users`, `products`, `orders`, `cart`, `payments`, `reviews`, `wishlist`, `notifications`, `admin`, `auth`).

## License

UNLICENSED (private project).
