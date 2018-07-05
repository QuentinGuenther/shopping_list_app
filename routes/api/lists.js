const express = require('express');
const router = express.Router();

// List Model
const List = require('../../models/List');

/**
 * @api {get} /api/lists/:list_id Retrieve a list.
 * @apiVersion 0.1.0
 * @apiName GetOne
 * @apiGroup List
 * @apiPermission public
 * 
 * @apiParam {String} list_id The list id
 * 
 * @apiSuccess {json} list The list information.
 * @apiSuccessExample {json} Success-Response:
 * 		HTTP/2 200 OK
 * 		{
 * 			"_id": "5b3c0f7c7b15a130c1ec257d",
 *   		"name": "Store Name",
 *   		"group_id": "5b3c0f367b15a130c1ec257c",
 *   		"date": "2018-07-04T00:06:20.839Z",
 *   		"__v": 0
 * 		}
 * @apiSuccessExample {json} Not-Found:
 * 		HTTP/2 404 NOT FOUND
 * 		{}
 */
router.get('/:list_id', (req, res) => {
	List.findById(req.params.list_id)
	.sort({ date: -1 })
	.then(list => res.json(list))
	.catch(() => res.status(404).send({}));
});

/**
 * @api {post} /api/lists/ Create a list.
 * @apiVersion 0.1.0 
 * @apiName Create
 * @apiGroup List
 * @apiPermission public
 * 
 * @apiParam (Request body) {json} list The list information
 * @apiParamExample {json} Post-Example:
 * 		{
 *			name: "List Name"
 *		}
 *
 * @apiSuccess {json} group The list information.
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
	const newList = new List({
	  name: req.body.name,
	  group_id: req.body.group_id
	});

	newList.save()
	.then(() => res.json({success: true}))
	.catch((err) => res.status(400).send({
		error: err.errors
	}));
});

module.exports = router;