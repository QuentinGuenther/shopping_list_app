/**
 * User data model,
 * @module
 * 
 * @description The User schema represents a user of the app.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	provider_id: String,
	display_name: String,
	name: {
		family_name: String,
		given_name: String
	},
	email: String,
	gender: String,
	provider: String,
	profile_image_url: String
});

module.exports = User = mongoose.model('user', UserSchema);