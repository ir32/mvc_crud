const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
// All contacts
//router.get('/all_data', contactController.getAllContacts);
router.get('/get_data', contactController.getAllContacts);

// Add contact view
router.get('/create', (req, res) => {
  res.render('addContact');
});

// Add new contact
router.post('/create', contactController.createContact);

// Edit contact view
router.get('/edit/:id', contactController.getContactById);

// Update contact
router.post('/update/:id', contactController.updateContact);

// Delete contact
router.post('/delete/:id', contactController.deleteContact);

module.exports = router;
