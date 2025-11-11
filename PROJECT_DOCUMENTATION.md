# ShopEasy E-Commerce Project - Complete Documentation

## 📋 Project Overview
ShopEasy is a full-stack e-commerce application built with React.js frontend and Spring Boot backend. It provides a complete online shopping experience with cart management, order processing, promocode system, and real-time order tracking.

## 🏗️ Architecture Overview
```
Frontend (React.js) ↔ Backend (Spring Boot) ↔ Database (JPA/Hibernate)
```

---

## 🎯 Frontend Structure (React.js)

### 📁 Project Structure
```
src/
├── Components/          # Reusable UI components
├── pages/              # Main page components
├── redux/              # State management
├── utils/              # Utility functions
├── App.js              # Main app component
├── App.css             # Global styles
└── index.js            # App entry point
```

---

## 📄 File-by-File Breakdown

### 🔧 Core Application Files

#### `src/index.js`
**Purpose**: Application entry point
**What it does**:
- Renders the main App component
- Wraps app with Redux Provider for state management
- Connects to DOM root element

#### `src/App.js`
**Purpose**: Main application router and layout
**What it does**:
- Sets up React Router for navigation
- Defines all application routes
- Includes Header component on all pages
- Routes:
  - `/` → Home page
  - `/product/:id` → Product details
  - `/cart` → Shopping cart
  - `/checkout` → Checkout process
  - `/orders` → Order history

#### `src/App.css`
**Purpose**: Global application styles
**What it does**:
- Defines global CSS reset and base styles
- Sets up modern design system (fonts, colors, spacing)
- Includes hover effects and animations
- Custom scrollbar styling
- Responsive design utilities

---

### 🏠 Page Components

#### `src/pages/home.js`
**Purpose**: Main landing page displaying all products
**What it does**:
- **Data Fetching**: Loads products from backend API (`/product`)
- **Search Functionality**: Real-time product search by title
- **Category Filtering**: Filter products by category
- **Product Display**: Grid layout of product cards
- **Recommendations**: Shows random product suggestions
- **Hero Section**: Welcome banner with gradient design
- **Error Handling**: Server unavailability messages

**Key Features**:
- Search bar with instant filtering
- Category dropdown filter
- Product count display
- Responsive grid layout
- Server error handling

#### `src/pages/ProductDetails.js`
**Purpose**: Individual product detail page
**What it does**:
- **Product Loading**: Fetches specific product by ID
- **Image Display**: Large product image with styling
- **Product Info**: Title, price, rating, description
- **Quantity Selection**: +/- buttons for quantity
- **Add to Cart**: Adds selected quantity to cart
- **Buy Now**: Quick purchase option
- **Related Products**: Shows products from same category
- **Navigation**: Back button and breadcrumbs

**Key Features**:
- Quantity selector with validation
- Visual feedback on add to cart
- Related product recommendations
- Responsive two-column layout
- Price display with discount indication

#### `src/pages/cart.js`
**Purpose**: Shopping cart management page
**What it does**:
- **Cart Display**: Shows all items in cart with details
- **Quantity Management**: Increase/decrease item quantities
- **Item Removal**: Remove individual items from cart
- **Promocode System**: Apply/remove discount codes
- **Price Calculation**: Subtotal, discount, grand total
- **Checkout Navigation**: Proceed to checkout button
- **Empty State**: Handles empty cart scenario

**Key Features**:
- Real-time price updates
- Promocode validation with backend
- Skip promocode option
- Visual quantity controls
- Server error handling for promocodes

---

### 🧩 Component Files

#### `src/Components/Header.js`
**Purpose**: Navigation header component
**What it does**:
- **Brand Logo**: ShopEasy branding with home link
- **Navigation Menu**: Home, Orders, Cart links
- **Cart Badge**: Shows item count in cart
- **Responsive Design**: Adapts to different screen sizes
- **Sticky Positioning**: Stays at top while scrolling

**Key Features**:
- Real-time cart count from Redux
- Gradient background design
- Hover effects on navigation items
- Mobile-friendly layout

#### `src/Components/ProductCard.js`
**Purpose**: Individual product display card
**What it does**:
- **Product Image**: Displays product image with styling
- **Product Info**: Title, price, rating display
- **Add to Cart**: Button with visual feedback
- **Navigation**: Links to product details page
- **Hover Effects**: Card elevation on hover
- **Price Formatting**: Integer price display

**Key Features**:
- Visual feedback on add to cart (button changes to "Added!")
- Hover animations and shadows
- Responsive card design
- Truncated title display

#### `src/Components/Search.js`
**Purpose**: Search input component
**What it does**:
- **Search Input**: Styled search field with placeholder
- **Real-time Search**: Updates results as user types
- **Focus Effects**: Visual feedback on input focus
- **Icon Integration**: Search icon in placeholder

**Key Features**:
- Rounded modern design
- Focus border color changes
- Responsive width
- Search icon integration

#### `src/Components/Recommendations.js`
**Purpose**: Product recommendation section
**What it does**:
- **Random Selection**: Picks 4 random products
- **Grid Display**: Shows products in responsive grid
- **Conditional Rendering**: Only shows when products available
- **Reusable Component**: Used in home and product details

**Key Features**:
- Randomized product selection
- Styled section with background
- Responsive grid layout
- Customizable title prop

#### `src/Components/CheckOut.js`
**Purpose**: Order checkout and payment processing
**What it does**:
- **Order Summary**: Displays cart items with prices
- **Address Form**: Collects delivery address details
- **Price Calculation**: Shows subtotal, discount, total
- **Order Placement**: Sends order to backend
- **Redux Integration**: Clears cart after successful order
- **Navigation**: Redirects to orders page after success

**Key Features**:
- Form validation for all address fields
- Promocode discount display
- Loading states during order placement
- Server error handling
- Order data formatting for backend

#### `src/Components/Orders.js`
**Purpose**: Order history and management
**What it does**:
- **Order Loading**: Fetches orders from backend
- **Order Display**: Shows order details with status
- **Status Tracking**: Visual status indicators with icons
- **Order Cancellation**: Cancel pending orders
- **Progressive Updates**: Status changes over time
- **Item Details**: Shows ordered products with images

**Key Features**:
- Color-coded order statuses
- Cancel button for eligible orders
- Order timeline display
- Individual item breakdown
- Server error handling

---

### 🔄 Redux State Management

#### `src/redux/store.js`
**Purpose**: Redux store configuration
**What it does**:
- **Store Setup**: Configures Redux store with reducers
- **Persistence**: Saves/loads state from localStorage
- **Middleware**: Sets up Redux toolkit
- **State Hydration**: Restores state on app reload

#### `src/redux/cartSlice.js`
**Purpose**: Shopping cart state management
**What it does**:
- **Cart State**: Manages items, promocodes, discounts
- **Actions**: Add, remove, update quantities
- **Promocode Management**: Apply/remove discount codes
- **Local Storage**: Persists cart data
- **Price Calculations**: Handles discount calculations

**Key Actions**:
- `addToCart`: Adds product to cart
- `removeFromCart`: Removes product from cart
- `increaseQuantity`/`decreaseQuantity`: Updates quantities
- `applyPromoCode`/`removePromoCode`: Manages discounts
- `clearCart`: Empties entire cart

#### `src/redux/orderSlice.js`
**Purpose**: Order history state management
**What it does**:
- **Order Storage**: Maintains order history
- **Order Actions**: Add new orders, update order list
- **State Persistence**: Saves orders to localStorage

**Key Actions**:
- `addOrder`: Adds new order to history
- `setOrders`: Updates entire order list

---

## 🔧 Backend Structure (Spring Boot)

### 📁 Backend Project Structure
```
src/main/java/com/E_commerce/BackEnd/
├── Controller/         # REST API endpoints
├── Service/           # Business logic layer
├── Model/             # Entity classes
├── Repository/        # Data access layer
└── config/           # Configuration classes
```

---

### 🎯 Backend File Details

#### Controllers (REST API Layer)

##### `Controller/ProductController.java`
**Purpose**: Product-related API endpoints
**Endpoints**:
- `GET /product` - Get all products
- `GET /product/{id}` - Get specific product
- `POST /product` - Add new product (admin)
- `PUT /product/{id}` - Update product (admin)
- `DELETE /product/{id}` - Delete product (admin)

##### `Controller/OrderController.java`
**Purpose**: Order management API endpoints
**Endpoints**:
- `POST /orders/checkout` - Place new order
- `GET /orders/getAll` - Get all orders
- `DELETE /orders/cancel/{id}` - Cancel order

**Key Features**:
- Order validation and processing
- Status management
- Error handling

##### `Controller/PromoCodeController.java`
**Purpose**: Promocode management API
**Endpoints**:
- `POST /promocode/add` - Add new promocode
- `GET /promocode/validate/{code}` - Validate promocode
- `GET /promocode/all` - Get all promocodes
- `GET /promocode/active` - Get active promocodes
- `DELETE /promocode/delete/{code}` - Delete promocode

**Key Features**:
- Code validation with expiry check
- Discount percentage validation
- CRUD operations for promocodes

#### Models (Entity Classes)

##### `Model/Product.java`
**Purpose**: Product entity definition
**Fields**:
- `id`: Unique product identifier
- `title`: Product name
- `price`: Product price (integer)
- `description`: Product description
- `category`: Product category
- `image`: Product image URL
- `rating`: Product rating

##### `Model/Orders.java`
**Purpose**: Order entity definition
**Fields**:
- `id`: Unique order identifier
- `items`: List of order items (OneToMany)
- `totalAmount`: Order total amount
- `status`: Order status (Pending/Shipped/Delivered)
- `address`: Delivery address
- `placedTime`: Order placement timestamp
- `itemDeliveryTime`: Expected delivery time

**Key Features**:
- JSON serialization handling (@JsonManagedReference)
- Lazy loading for performance
- Cascade operations for order items

##### `Model/OrderItem.java`
**Purpose**: Individual order item entity
**Fields**:
- `id`: Unique item identifier
- `order`: Parent order reference (ManyToOne)
- `productId`: Referenced product ID
- `title`: Product title snapshot
- `price`: Product price snapshot
- `quantity`: Ordered quantity

**Key Features**:
- Prevents circular reference (@JsonBackReference)
- Stores product snapshot data

##### `Model/PromoCode.java`
**Purpose**: Promocode entity definition
**Fields**:
- `promoCode`: Unique code identifier (Primary Key)
- `discountPercentage`: Discount percentage (String)
- `validity`: Expiry date/time

#### Services (Business Logic Layer)

##### `Service/ProductService.java`
**Purpose**: Product business logic
**Functions**:
- Product CRUD operations
- Data validation
- Business rule enforcement

##### `Service/OrderService.java`
**Purpose**: Order processing business logic
**Functions**:
- `placeOrder()`: Creates new order with items
- `getAllOrders()`: Retrieves orders with status updates
- `updateDeliveryStatus()`: Progressive status updates
- `cancelOrder()`: Order cancellation logic

**Key Features**:
- **Progressive Status Updates**: 
  - 0-2 hours: Pending
  - 2-4 hours: Shipped
  - 4-6 hours: Out for Delivery
  - 6+ hours: Delivered
- Automatic status calculation based on time elapsed
- Order validation and processing

##### `Service/PromocodeService.java`
**Purpose**: Promocode business logic
**Functions**:
- `addPromoCode()`: Creates new promocode with validation
- `validatePromoCode()`: Checks code validity and expiry
- `getAllPromoCodes()`: Retrieves all codes
- `getActivePromoCodes()`: Retrieves non-expired codes
- `deletePromoCode()`: Removes promocode

**Key Features**:
- Discount percentage validation (1-100%)
- Expiry date validation
- Case-insensitive code handling
- Default validity setting (30 days)

#### Repositories (Data Access Layer)

##### `Repository/ProductDao.java`
**Purpose**: Product data access interface
**Extends**: JpaRepository<Product, Integer>
**Features**: Standard CRUD operations

##### `Repository/OrderDao.java`
**Purpose**: Order data access interface
**Extends**: JpaRepository<Orders, Integer>
**Features**: Order persistence and retrieval

##### `Repository/PromocodeDao.java`
**Purpose**: Promocode data access interface
**Extends**: JpaRepository<PromoCode, String>
**Features**: Code-based lookups and validation

---

## 🔄 Application Flow

### 1. **User Journey - Product Browsing**
```
Home Page Load → Fetch Products → Display Grid → Search/Filter → View Details
```
1. User visits home page
2. Frontend fetches products from `/product` API
3. Products displayed in responsive grid
4. User can search or filter by category
5. Click on product navigates to details page

### 2. **User Journey - Shopping Cart**
```
Add to Cart → Redux Update → Local Storage → Cart Page → Quantity Management
```
1. User clicks "Add to Cart" on product
2. Redux action dispatched to add item
3. Cart state updated and saved to localStorage
4. Cart badge updates with new count
5. User can view cart and modify quantities

### 3. **User Journey - Promocode Application**
```
Cart Page → Enter Code → Backend Validation → Apply Discount → Update Prices
```
1. User enters promocode in cart
2. Frontend calls `/promocode/validate/{code}` API
3. Backend validates code and expiry
4. If valid, discount applied to cart
5. Prices recalculated with discount

### 4. **User Journey - Order Placement**
```
Checkout → Address Form → Order Processing → Backend Storage → Confirmation
```
1. User proceeds to checkout
2. Fills delivery address form
3. Order data sent to `/orders/checkout` API
4. Backend creates order and items
5. Cart cleared and user redirected to orders

### 5. **User Journey - Order Tracking**
```
Orders Page → Fetch Orders → Status Display → Progressive Updates → Cancellation
```
1. User visits orders page
2. Frontend fetches from `/orders/getAll` API
3. Backend calculates current status based on time
4. Orders displayed with status icons
5. User can cancel eligible orders

---

## 🔧 Technical Implementation Details

### **State Management Flow**
```
User Action → Component → Redux Action → Reducer → State Update → UI Re-render
```

### **API Communication Flow**
```
Frontend Request → Axios/Fetch → Backend Controller → Service Layer → Repository → Database
```

### **Error Handling Strategy**
```
API Error → Catch Block → Error Type Check → User-Friendly Message → Graceful Degradation
```

### **Data Persistence**
- **Frontend**: Redux state saved to localStorage
- **Backend**: JPA entities persisted to database
- **Cart**: Survives browser refresh
- **Orders**: Permanent storage with status tracking

---

## 🎨 Design System

### **Color Palette**
- Primary: `#667eea` (Purple gradient start)
- Secondary: `#764ba2` (Purple gradient end)
- Success: `#28a745` (Green)
- Warning: `#ffc107` (Yellow)
- Danger: `#dc3545` (Red)
- Info: `#17a2b8` (Blue)

### **Typography**
- Font Family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- Headings: Bold weights with proper hierarchy
- Body: Regular weight with good line height

### **Layout Principles**
- Mobile-first responsive design
- Card-based component layout
- Consistent spacing and padding
- Shadow effects for depth
- Smooth transitions and animations

---

## 🚀 Key Features Summary

### **Frontend Features**
- ✅ Responsive design with modern UI
- ✅ Real-time search and filtering
- ✅ Shopping cart with quantity management
- ✅ Promocode system with validation
- ✅ Order tracking with status updates
- ✅ Server error handling
- ✅ Local storage persistence
- ✅ Visual feedback and animations

### **Backend Features**
- ✅ RESTful API architecture
- ✅ JPA/Hibernate data persistence
- ✅ Progressive order status updates
- ✅ Promocode validation system
- ✅ Order management with cancellation
- ✅ Error handling and validation
- ✅ CORS configuration for frontend
- ✅ JSON serialization optimization

### **Business Logic**
- ✅ Automatic order status progression
- ✅ Promocode expiry validation
- ✅ Price calculations with discounts
- ✅ Order cancellation rules
- ✅ Inventory management ready
- ✅ User-friendly error messages

---

## 🔧 Development Setup

### **Frontend Setup**
```bash
cd web-api
npm install
npm start
```

### **Backend Setup**
```bash
cd E_Commerce-website-backend-with-springboot
./mvnw spring-boot:run
```

### **Database**
- H2 in-memory database (development)
- JPA auto-creates tables
- Sample data loaded via DataLoader

---

## 📊 API Endpoints Summary

### **Products**
- `GET /product` - List all products
- `GET /product/{id}` - Get product details

### **Orders**
- `POST /orders/checkout` - Place order
- `GET /orders/getAll` - Get order history
- `DELETE /orders/cancel/{id}` - Cancel order

### **Promocodes**
- `POST /promocode/add` - Add promocode
- `GET /promocode/validate/{code}` - Validate code
- `GET /promocode/all` - List all codes
- `DELETE /promocode/delete/{code}` - Delete code

---

This documentation provides a complete understanding of the ShopEasy e-commerce project, covering every file, component, and feature in detail. The application demonstrates modern full-stack development practices with React.js and Spring Boot.