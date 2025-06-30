import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getMessages, getUsersForSidebar, sendMessage } from "../controllers/message.controller.js";

const router = express.Router();

router.get("/chat/users", protectRoute, getUsersForSidebar);
router.post("/chat/send/:id", protectRoute, sendMessage);
router.get("/chat/:id", protectRoute, getMessages);



export default router;