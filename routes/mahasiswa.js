import express from "express";
import {
  getAllMhs,
  addMhs,
  getMhs,
  updateMhs,
  deleteMhs,
} from "../controllers/Mahasiswa.js";

const router = express.Router();

router.get("/", getAllMhs);
router.get("/:id", getMhs);
router.post("/", addMhs);
router.put("/update/:id", updateMhs);
router.delete("/delete/:id", deleteMhs);

export default router;
