import express from "express";
import { createUser, deleteUser, getAllUser, getParticularUser, updateUser } from "../controllers/users.js";

const router = express.Router();

router.get("/",getAllUser);

router.post("/",createUser);

router.get("/:id", getParticularUser);

router.delete("/:id",deleteUser);

router.patch("/:id",updateUser);

export default router;