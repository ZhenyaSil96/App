let express = require('express');
let router = express.Router();

let user_controller = require('../Controllers/UserController');

router.get('/user/create/get', user_controller.finduserget);
router.post('/user/create/post', user_controller.finduserpost);
router.put('/user/create/put', user_controller.finduserput);
router.delete('/user/create/delete', user_controller.finduserdelete);

module.exports = router;