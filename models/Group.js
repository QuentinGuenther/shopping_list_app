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
	lists: [ListSchema],
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = {
	GroupSchema,
	Group = mongoose.model('group', GroupSchema)
};