import express from "express"
import { productController } from "../controllers/Product.controller";
const router=express.Router()


router.post("/",productController.addProduct)

router.get("/",productController.viewAllProducts)

export default router;
