import express from "express"
const router = express.Router()

import { accountController } from "../controllers/Accounts.controller";

router.post("/signup",accountController.signup)
router.post("/login",accountController.login)


export default router;