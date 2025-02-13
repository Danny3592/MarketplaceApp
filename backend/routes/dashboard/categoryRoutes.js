const categoryControllers = require('../../controllers/dashboard/categoryController');
const { authMiddleware } = require('../../middlewares/authMiddleware');
const router = require('express').Router();




router.post('/category-add', categoryControllers.add_category);
router.get('/category-get', categoryControllers.get_category);


module.exports = router;