import express from "express"
import { productController } from "../controllers/Product.controller";
const router=express.Router()
import { verifyToken } from "../auth/Authentication";


router.post("/",verifyToken,productController.addProduct)

router.get("/",verifyToken,productController.viewAllProducts)

router.get("/:id",verifyToken,productController.viewProductById)

router.put("/:id",verifyToken,productController.updateProductById)

router.delete("/:id",verifyToken,productController.deleteProductById)

router.get("/serchbyname/:name",verifyToken,productController.serchProductsByName)

router.get("/filterbycategory/:name",verifyToken,productController.filterProductsByCategory)


export default router;
