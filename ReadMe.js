/*
React Shopping App Documentation
================================
Overview
========
The React Shopping App is a simple e-commerce application where users can view a list of products, add them to the cart, and manage the items in the cart.

Project Structure
=================
The project is organized into several components:

App Component (App.jsx)
=======================

The main component that wraps the entire application.
Imports ProductList and CartPage.
Utilizes the ProductProvider to manage the state using the Context API.

ProductList Component (ProductList.jsx)
======================================

Displays a list of products.
Each product includes details such as name, price, and an "Add to Cart" button.
The "Add to Cart" button is disabled if the product is already in the cart.

CartPage Component (CartPage.jsx)
=================================

Displays the items in the cart, including their title, price, and quantity.
Users can update the quantity or remove items from the cart.
Calculates and displays the total quantity and total amount of items in the cart.

ProductContext (ProductContext.jsx)
===================================

Manages the global state using the Context API.
Provides a Product Provider for components to access the state and dispatch actions.

CSS Styles
==========

Styles are provided in separate CSS files (ProductList.css, Cart.css) to maintain a clean structure.


How to Run
==========
Clone the project from the repository.
Navigate to the project directory in the terminal.
Run npm install to install dependencies.
Run npm start to start the development server.
Open your browser and go to http://localhost:3000 to view the application.

Usage
=====
Product List
============

View the list of products with details.
Click the "Add to Cart" button to add a product to the cart.

Cart Page
=========

Access the cart page by clicking on the "Cart" link.
View and manage items in the cart.
Update the quantity or remove items.
View the total quantity and total amount of items in the cart.

Technologies Used
=================
React.js
javascript
HTML
Context API for state management
CSS for styling
*/