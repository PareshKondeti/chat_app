import express from "express";
import { getMessages, sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoutes.js";

const router = express.Router();

router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);

export default router;

//Cannot find module 'E:\chat_app\backend\middleware\protectRoute.js' imported from E:\chat_app\backend\routes\messsage.routes.js
