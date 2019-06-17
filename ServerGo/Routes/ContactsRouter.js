let express = require('express');
let router = express.Router();

let contact_controller = require('../Controllers/ContactsController');

router.get('/contacts/create/id', contact_controller.findById);
router.get('/contacts/create/name', contact_controller.findByFirstName);
router.get('/contacts/create/lastename', contact_controller.findByLasteName);
router.get('/contacts/create/email', contact_controller.findByEmail);
router.post('/contacts/create', contact_controller.create);
router.put('/contacts/create/put', contact_controller.update);
router.delete('/contacts/create/delete', contact_controller.delete);

module.exports = router;