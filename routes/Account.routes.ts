import express from "express"
const router = express.Router()

import { accountController } from "../controllers/Accounts.controller";


/**
 * @swagger
 * /api/account/signup:
 *   post:
 *     summary: Create a new Account
 *     tags: [Accounts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               -email
 *               -username
 *               -password
 *     responses:
 *       201:
 *         description: Account created successfully
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 */


/**
 * @swagger
 * /api/account/login:
 *   post:
 *     summary: Login user
 *     tags: [Accounts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               -email
 *               -password
 *     responses:
 *       201:
 *         description: Account created successfully
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 */




router.post("/signup",accountController.signup)

router.post("/login",accountController.login)


export default router;