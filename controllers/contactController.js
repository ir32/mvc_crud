// contactController.js

const Contact = require('../models/contactModel');

const contactController = {
  getAllContacts: (req, res) => {
    Contact.getAll()
      .then(([rows]) => {
        res.render('contactView', { contacts: rows });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send('Internal Server Error');
      });
  },

  getContactById: (req, res) => {
    const { id } = req.params;

    Contact.getById(id)
      .then(([rows]) => {
        if (rows.length === 0) {
          res.status(404).send('Contact not found');
        } else {
          const contact = rows[0]; // Extract the first contact from the result
          res.render('editContact', { contact });
        }
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send('Internal Server Error');
      });
  },

  createContact: (req, res) => {
    const { name, email, phone } = req.body;
    const contactData = { name, email, phone };

    Contact.create(contactData)
      .then(() => {
        res.redirect('/contacts/get_data');
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send('Internal Server Error');
      });
  },

  updateContact: (req, res) => {
    const { id } = req.params;
    const { name, email, phone } = req.body;
    const contactData = { name, email, phone };

    Contact.update(id, contactData)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.status(404).send('Contact not found');
        } else {
          res.redirect('/contacts/get_data');
        }
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send('Internal Server Error');
      });
  },

  deleteContact: (req, res) => {
    const { id } = req.params;

    Contact.delete(id)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.status(404).send('Contact not found');
        } else {
          res.redirect('/contacts/get_data');
        }
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send('Internal Server Error');
      });
  },
};

module.exports = contactController;
