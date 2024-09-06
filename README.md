# Hotel Booking Website
This project is a full-stack hotel booking application built using Node.js, Express.js, MongoDB, and EJS templating engine. It allows users to search for hotel listings, make bookings, leave reviews, and manage user accounts. Additionally, it includes interactive maps for enhanced user experience.

## Features
- User Authentication: Users can sign up, log in, and log out.
- Hotel Listings: Users can view all available hotel listings, filter results, and see detailed information.
- Map Integration: Integrated map functionality for viewing the location of hotels.
- User Reviews: Users can leave reviews and ratings for hotels they’ve visited.
- Admin Dashboard: Admin can add, edit, and delete hotel listings.
- Responsive Design: Mobile-friendly UI built with EJS and custom CSS.

## Tech Stack
- Backend: Node.js, Express.js
- Frontend: EJS (Embedded JavaScript), CSS
- Database: MongoDB
- APIs: Map APIs for location and hotel listings
- Authentication: Passport.js for user authentication and session management

## Folder Structure
### /controllers
- listings.js: Handles logic related to hotel listings (CRUD operations).
- reviews.js: Manages review-related functionality such as posting reviews.
- users.js: Handles user authentication and profile management.
### /models
- listing.js: Mongoose schema for hotel listings.
- review.js: Mongoose schema for storing user reviews and ratings.
- user.js: Mongoose schema for user data (authentication, profile).
### /routes
- listing.js: Defines routes for CRUD operations on hotel listings.
- review.js: Routes for managing user reviews.
- user.js: Routes for user registration, login, and profile management.
### /public
- css/: Contains the styling for the website, including rating.css for reviews and style.css for the overall site.
- js/: Includes map.js for integrating maps into the listing pages and script.js for additional client-side functionalities.
### /views
- includes/: Contains reusable partial templates like navbar, footer, and flash messages.
- layouts/: Main boilerplate.ejs template that wraps all other views.
- listings/: Templates related to hotel listings (edit, index, new, show).
- users/: User-specific templates for login, signup, and error handling.
### /utils
- expressError.js: Custom error-handling class for managing server errors.
- wrapAsync.js: Utility for wrapping asynchronous route handlers to catch errors.
  
## Setup Instructions
1. Clone the repository
git clone <repository-url>
cd hotel-booking-app

2. Install Dependencies
npm install

3. Set Up MongoDB
Make sure you have MongoDB installed locally or use a cloud provider like MongoDB Atlas.

4. Configure Environment Variables
  Create a .env file in the root directory and add the following:
  PORT=3000
  MONGODB_URI=<your-mongodb-uri>
  CLOUD_API_KEY=<your-cloud-api-key>
  SESSION_SECRET=<your-session-secret>
  
5. Run the Application
npm start

6. Visit the Application
The website should be live at http://localhost:3000.

## Future Improvements
Add a payment gateway for booking confirmations.
Implement a notification system for bookings and review responses.
Optimize the mobile experience with better responsive design.

## Contributing
Feel free to open issues or submit pull requests for any improvements.
