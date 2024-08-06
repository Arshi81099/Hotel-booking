const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const expressError = require("./utils/expressError");

const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");


const MONGO_URL = "mongodb://localhost:27017/wanderlust";

main()
    .then(() => console.log("MongoDB connected!"))
    .catch(err => console.log(err));

async function main() {
mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
    res.send("Hii! I am root");
    });

app.use("/listings", listings);
app.use("/listings/:id/reviews", reviews);

app.all("*", (req, res, next) => {
    next(new expressError(404, "Page Not Found"));
});

app.use((err, req, res, next) => {
    let { status = 500, message = "Something went wrong!!"} = err;
    res.status(status).render("error.ejs", { err });
    // res.render("error.ejs"), { err };
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});