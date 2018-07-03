const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item').Item;

/**
 * @route GET api/items
 * @description Get all Items
 * @access authenticated
 */
router.get('/', (req, res) => {
	// TODO: authenticate route
	Item.find()
    .sort({ date: -1 })
	.then(items => res.json(items));
});

/**
 * @route POST api/items
 * @description Create a item
 * @access authenticated
 */
router.post('/', (req, res) => {
	const newItem = new Item({
	  name: req.body.name,
	  quantity: req.body.quantity
	});
  
	newItem.save()
	.then(item => res.json({success: true}))
	.catch((err) => res.status(400).send({
		error: err.errors
	}));
});

module.exports = router;