const router = require('express').Router();
const { asyncHandler } = require('../middlewares/asyncHandler');
const categoryController = require('../controllers/category.controller');


// router.route('/signup')
    // .post(signupValidator, asyncHandler(checkUsername), asyncHandler(authController.signup));
router.route('/createCategory')
    .post(  asyncHandler(categoryController.createCategory));
router.route('/allCategory').get(asyncHandler(categoryController.allCategory))
router.route('/findCategory/:id').get(asyncHandler(categoryController.findByCategory))
router.route('/deleteCategory/:id').post(asyncHandler(categoryController.deleteCategory))

// router.route('/category')
//     .post(asyncHandler(authController.signin));

module.exports = router;