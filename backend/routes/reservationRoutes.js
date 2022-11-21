import express from "express";
const router = express.Router();

import {
  CancelReservation,
  CreateReservation,
  DeleteReservation,
  getReservation,
  getReservationById,
  RetrievingGuestStaySummary,
  SearchReservation,
} from "../controllers/reservationController.js";

router.route("/create").post(CreateReservation);
router.route("/").get(getReservation);
router.route("/:id").get(getReservationById);
router.route("/search/:date").get(SearchReservation);
router.route("/cancel/:id").put(CancelReservation);
router.route("/delete/:id").delete(DeleteReservation);
router.route("/summary/stay").get(RetrievingGuestStaySummary);

export default router;
