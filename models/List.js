/**
 * List data model.
 * @module
 * 
 * @description The List schema represents a grouping of Items, similar to a grocery list.
 * @see Item
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListSchema = new Schema({
	group_id: {
		type: Schema.Types.ObjectId,
		ref: 'group',
		required: true
	},
	name: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = List = mongoose.model('list', ListSchema);