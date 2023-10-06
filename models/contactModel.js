// contactModel.js

const db = require('../db');

class Contact {
  static getAll() {
    return db.query('SELECT * FROM contacts');
  }
 
  static getById(id) {
    return db.query('SELECT * FROM contacts WHERE id = ?', [id]);
  }

  static create(contactData) {
    return db.query('INSERT INTO contacts SET ?', contactData);
  }

  static update(id, contactData) {
    return db.query('UPDATE contacts SET ? WHERE id = ?', [contactData, id]);
  }

  static delete(id) {
    return db.query('DELETE FROM contacts WHERE id = ?', [id]);
  }
}

module.exports = Contact;
