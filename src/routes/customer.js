const router = require('express').Router();

const customerController = require('../controllers/customerController');

router.get('/', customerController.index);
router.get('/home', customerController.list);
router.get('/signup', customerController.signup);
router.post('/add', customerController.save);
router.get('/update/:id', customerController.edit);
router.post('/update/:id', customerController.update);
router.get('/delete/:id', customerController.delete);

module.exports = router;

