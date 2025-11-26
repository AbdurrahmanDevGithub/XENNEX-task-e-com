import express from "express"
import { productController } from "../controllers/Product.controller";
const router=express.Router()


router.post("/",productController.addProduct)

router.get("/",productController.viewAllProducts)

router.get("/:id",productController.viewProductById)

router.put("/:id",productController.updateProductById)
export default router;
