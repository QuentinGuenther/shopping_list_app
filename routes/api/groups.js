const express = require('express');
const router = express.Router();

// Group Model
const Group = require('../../models/Group');

/**
 * @api {get} /api/groups/:group_id Retrieve a group.
 * @apiVersion 0.1.0 
 * @apiName GetOne
 * @apiGroup Group
 * @apiPermission public
 * 
 * @apiParam {String} group_id The group id
 * 
 * @apiSuccess {json} group The group information.
 * @apiSuccessExample {json} Success-Response:
 * 		HTTP/2 200 OK
 * 		{
 * 			"_id": "5b3c0f367b15a130c1ec257c",
 *   		"name": "Group Name",
 *   		"date": "2018-07-04T00:05:10.804Z",
 *   		"__v": 0
 * 		}
 * @apiSuccessExample {json} Not-Found:
 * 		HTTP/2 404 NOT FOUND
 * 		{}
 */
router.get('/:group_id', (req, res) => {
	// TODO: authenticate route
	
	Group.findById(req.params.group_id)
	.sort({ date: -1 })
	.then(group => res.json(group))
	.catch(() => res.status(404).send({}));
});

/**
 * @api {post} /api/groups/ Create a group.
 * @apiVersion 0.1.0 
 * @apiName Create
 * @apiGroup Group
 * @apiPermission public
 * 
 * @apiParam (Request body) {json} group The group information
 * @apiParamExample {json} Post-Example:
 * 		{
 *			name: "Group Name"
 *		}
 *
 * @apiSuccess {json} group The group information.
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

	const newGroup = new Group({
	  name: req.body.name,
	});
  
	newGroup.save()
	.then(() => res.json({success: true}))
	.catch((err) => res.status(400).send({
		error: err.errors
	}));
});

module.exports = router;