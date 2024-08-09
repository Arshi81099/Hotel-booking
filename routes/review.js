const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync");
const {isLoggedIn, validateReview, isReviewAuthor} = require("../middleware");


const reviewController = require("../controllers/reviews");


//Reviews
//Post Route
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

// Delete Review route
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.deleteReview));


module.exports = router;