const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

// Main function to connect to the database
main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL); // Connect to MongoDB
}

// Function to initialize the database
const initDB = async () => {
  await Listing.deleteMany({}); // Clear the Listing collection
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "66b2507b05a002ad0a634290", // Set a specific owner ID
    image: obj.image.url, 
  }));
  await Listing.insertMany(initData.data); // Insert modified data into the Listing collection
  console.log("data was initialized");
};

initDB(); // Run the initialization
