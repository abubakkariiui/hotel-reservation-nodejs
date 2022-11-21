import mongoose from "mongoose";

const reservationSchema = mongoose.Schema({
  reservationId: {
    type: String,
    require: true,
  },
  guestMemberId: {
    type: String,
    require: true,
  },
  guestName: {
    type: String,
    require: true,
  },
  hotelName: {
    type: String,
    require: true,
  },
  arrivalDate: {
    type: String,
    require: true,
  },
  departureDate: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
    default: "active",
  },
  baseStayAmount: {
    type: Number,
    require: true,
  },
  taxAmount: {
    type: Number,
    require: true,
  },
});

const Reservation = mongoose.model("Reservation", reservationSchema);

export default Reservation;
