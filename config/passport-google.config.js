const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

const keys = require('./keys').google;

// Use Google Strategy
passport.use(
	new GoogleStrategy({
		// options for Google Strategy
		callbackURL: '/api/auth/google/redirect',
		clientID: keys.clientID,
		clientSecret: keys.clientSecret
	}, () => {
		// Passport callback function
	})
);