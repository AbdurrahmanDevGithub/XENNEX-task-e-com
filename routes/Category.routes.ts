import express from "express";
import { CategoryController } from "../controllers/Category.controller";
import { verifyToken } from "../auth/Authentication";
const router=express()



router.post("/",verifyToken,CategoryController.addCategory)

router.get("/",verifyToken,CategoryController.viewAllCategories)

router.get("/:id",verifyToken,CategoryController.viewCatageoryById)

router.put("/:id",verifyToken,CategoryController.updateCategoryById)

router.delete("/:id",verifyToken,CategoryController.deleteCategoryById)


export default router