const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// API Routes
const items = require('./routes/api/items');
const lists = require('./routes/api/lists');
const groups = require('./routes/api/groups');
const authGoogle = require('./routes/api/auth/google/google-auth');

// Passport Config
const passportGoogle = require('./config/passport-google.config');

const app = express();

// BodyParser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
// Console.log success or error message
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Use Routes

//
// TODO: Add 404 route
// TODO: Add 500s route
// TODO: Add Lists route
// TODO: Add Groups route
// TODO: Authenticate routes.
//

app.use('/api/items', items);
app.use('/api/lists', lists);
app.use('/api/groups', groups);
app.use('/api/auth/google', authGoogle);

// Set port for server to run on
const port = process.env.PORT || 5000;
// Start the server and console.log the port number
app.listen(port, () => console.log(`Server started on port ${port}`));