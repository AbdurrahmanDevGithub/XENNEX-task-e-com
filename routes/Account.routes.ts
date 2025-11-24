import express from "express"
const router = express.Router()

import { accountController } from "../controllers/Accounts.controller";

router.post("/signup",accountController.signup)



export default router;