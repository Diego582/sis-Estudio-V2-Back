import express from "express";
import userRouter from "./users.js";
import authRouter from "./auth.js";
/* import reviewsRouter from "./reviews.js"; */

const router = express.Router();

router.use("/auth", authRouter);

export default router;
