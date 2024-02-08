const express = require("express");
const { addToCart, fetchCartByUser, updateCart, deleteFromCart } = require("../controller/Cart");

const router = express.Router();
router
  .post("/", addToCart)
  .get("/", fetchCartByUser)
  .patch('/:id',updateCart)
  .delete('/:id',deleteFromCart);
  

exports.router = router;
