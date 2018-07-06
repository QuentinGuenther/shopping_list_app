const router = require('express').Router();
const passport = require('passport');

router.get('/', passport.authenticate('google', {
	scope: ['profile', 'email']
}));

router.get('/redirect', passport.authenticate('google'), (req, res) => {
	res.sendStatus(200);
});

module.exports = router;