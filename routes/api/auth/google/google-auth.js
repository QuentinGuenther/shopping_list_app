const router = require('express').Router();
const passport = require('passport');

router.get('/', passport.authenticate('google', {
	scope: ['profile']
}));

router.get('/redirect', (req, res) => {
	res.send('You reached the calback!');
});

module.exports = router;