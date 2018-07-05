const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

/**
 * @api {get} /api/items/:item_id Retrieve a item.
 * @apiVersion 0.1.0
 * @apiName GetOne
 * @apiGroup Item
 * @apiPermission public
 * 
 * @apiParam {String} item_id The item id
 * 
 * @apiSuccess {json} item The item information.
 * @apiSuccessExample {json} Success-Response:
 * 		HTTP/2 200 OK
 * 		{
 * 			"_id": "5b3c0f7c7b15a130c1ec257d",
 *   		"name": "Item Name",
 * 			"quantity": 1,
 *   		"list_id": "5b3c0f367b15a130c1ec257c",
 *   		"date": "2018-07-04T00:06:20.839Z",
 *   		"__v": 0
 * 		}
 * @apiSuccessExample {json} Not-Found:
 * 		HTTP/2 404 NOT FOUND
 * 		{}
 */
router.get('/:item_id', (req, res) => {
	// TODO: authenticate route
	Item.findById(req.params.item_id)
	.sort({ date: -1 })
	.then(item => res.json(item));
});

/**
 * @api {post} /api/items/ Create a item.
 * @apiVersion 0.1.0 
 * @apiName Create
 * @apiGroup Item
 * @apiPermission public
 * 
 * @apiParam (Request body) {json} item The item information
 * @apiParamExample {json} Post-Example:
 * 		{
 *			name: "Item Name",
			quantity: 1
 *		}
 *
 * @apiSuccess {json} group The item information.
 * @apiSuccessExample {json} Success-Response:
 * 		HTTP/2 200 OK
 * 		{
 * 			success: true
 * 		}
 * @apiSuccessExample {json} Error-Response:
 * 		HTTP/2 400 BAD REQUEST
 * 		{
 *			"error": {
 * 				"name": {
 *					"message": "Path `name` is required.",
 *					"name": "ValidatorError",
 *					"properties": {
 *						"message": "Path `{PATH}` is required.",
 *						"type": "required",
 *						"path": "name"
 *					},
 *					"kind": "required",
 *					"path": "name",
 *					"$isValidatorError": true
 * 				}
 *			}
 *		}
 */
router.post('/', (req, res) => {
	// TODO: authenticate route
	const newItem = new Item({
	  name: req.body.name,
	  quantity: req.body.quantity,
	  list_id: req.body.list_id
	});
	
	newItem.save()
	.then(() => res.json({success: true}))
	.catch((err) => res.status(400).send({
		error: err.errors
	}));
});

module.exports = router;