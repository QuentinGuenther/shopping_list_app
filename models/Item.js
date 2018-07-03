/**
 * Item data model.
 * @module
 * 
 * @description The Item schema represents an item in a list.
 * For example on a list with many items (milk, eggs, cheese), this model 
 * would represent each individual item.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	quantity: {
		type: Number,
		default: 1
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = {
	ItemSchema,
	Item: mongoose.model('item', ItemSchema)
};