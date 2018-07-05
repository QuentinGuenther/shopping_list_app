const router = require('express').Router();
const passport = require('passport');

router.get('/', passport.authenticate('google', {
	scope: ['profile', 'email']
}));

router.get('/redirect', passport.authenticate('google'), (req, res) => {
	res.send('You reached the calback!');
});

module.exports = router;