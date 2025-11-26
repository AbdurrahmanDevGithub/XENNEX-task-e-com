import express from "express"
import { productController } from "../controllers/Product.controller";
const router=express.Router()


router.post("/",productController.addProduct)

router.get("/",productController.viewAllProducts)

router.get("/:id",productController.viewProductById)

router.put("/:id",productController.updateProductById)

router.delete("/:id",productController.deleteProductById)

router.get("/serchbyname/:name",productController.serchProductsByName)

router.get("/filterbycategry/:name",productController.filterProductsByCategory)


export default router;
