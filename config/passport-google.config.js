const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

const keys = require('./keys').google;
const User = require('../models/User');

// Use Google Strategy
passport.use(
	new GoogleStrategy({
		// options for Google Strategy.
		callbackURL: '/api/auth/google/redirect',
		clientID: keys.clientID,
		clientSecret: keys.clientSecret
	}, (accessToken, refreshToken, profile, done) => {

		// Check if user already exists in the database.
		User.findOne({provider_id: profile.id})
		.then((currentUser) => {
			if(currentUser) {
				// Already have user.
				// TODO: create action for when a user is found
			} else {
				// Create a new user in db.
				new User({
					provider_id: profile.id,
					display_name: profile.displayName,
					name: {
						family_name: profile.name.familyName,
						given_name: profile.name.givenName
					},
					email: profile.emails[0].value,
					gender: profile.gender,
					provider: 'Google',
					profile_image_url: profile._json.image.url
				})
				.save()
				.then((newUser) => {
					// TODO create action for after a user is made
				});
			}
		});
	})
);