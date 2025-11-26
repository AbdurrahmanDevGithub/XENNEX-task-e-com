A backend REST API for an e commerce application built using Node.js, TypeScript, Express, and MongoDB.

Features
-CRUD operations for Products and Categories
-JWT-based authentication and authorization
-Search products by name
-Filter products by Categories
-Input validation and error handling
-Fully typed using TypeScript

Account section api
  POST /api/account/signup
  GET /api/account/login 

category section API
  POST /api/categories   --Create new category
  GET /api/categories   --List all categories
  GET /api/categories/:id   --Get category by ID
  PUT /api/categories/:id   --Update category
  DELETE /api/categories/:id   --Delete category

product section Api
  POST /api/products   --Create new product
  GET /api/products List   --all products
  GET /api/products/:id   --Get product by ID
  PUT /api/products/:id  --Update product
  DELETE /api/products/:id   --Delete product
  GET /api/products/searchbyname/:name   --Serch product by name
  GET /api/products/filterbycategory/:name   --Filter products by category



-Folder Structure

backend/
  │── src/
  │ ├── config/
  │ │ └── db.js
  │ ├── controllers/
  │ │ ├── product.controller.ts
  │ │ └── category.controller.ts
  │ ├── dbModels/
  │ │ ├── product.model.ts
  │ │ └── category.model.ts
  | | └── account.model.ts
  │ ├── routes/
  │ │ ├── product.routes.ts
  │ │ └── category.routes.ts
  | |── services/
  │ │ ├── product.services.ts
  │ │ └── category.services.ts
  | | └── account.services.ts
  │ └── app.js
  │── package.json
  │── README.md


  
