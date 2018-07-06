const router = require('express').Router();
const passport = require('passport');

router.get('/logout', (req, res) => {
	req.logout();
	res.send(200);
});

module.exports = router;