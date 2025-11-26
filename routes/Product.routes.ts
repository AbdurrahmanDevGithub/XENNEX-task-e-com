import express from "express"
import { productController } from "../controllers/Product.controller";
const router=express.Router()


router.post("/",productController.addProduct)



export default router;