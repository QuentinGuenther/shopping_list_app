/**
 * Group data model.
 * @module
 * 
 * @description the Group Schema represents a group of Lists.
 * @see List
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListSchema = require('./List').ListSchema;

const GroupSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = Group = mongoose.model('group', GroupSchema);