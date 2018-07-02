/**
 * List data model.
 * @module
 * 
 * @description The List schema represents a grouping of Items, similar to a grocery list.
 * @see Item
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = require('./Item').ItemSchema;

const ListSchema = new Schema({
	items: [ItemSchema],
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = {
	ListSchema,
	List = mongoose.model('list', ListSchema)
};