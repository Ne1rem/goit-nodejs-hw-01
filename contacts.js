const fs = require("node:fs/promises");
const path = require("node:path");
const crypto = require("node:crypto");

const contactsPath = path.join(__dirname, "./db/contacts.json");

async function listContacts() {
  const data = await fs.readFile(contactsPath, { encoding: "UTF-8" });
  return JSON.parse(data);
}

function writeContacts(contactsData) {
  return fs.writeFile(contactsPath, JSON.stringify(contactsData, undefined, 2));
}

async function getContactById(contactId) {
  const contactsDatas = await listContacts();
  const contactsData = contactsDatas.find(
    (contacts) => contacts.id === contactId
  );
  return contactsData;
}

async function removeContact(contactId) {
  const contactsDatas = await listContacts();
  const index = contactsDatas.findIndex(
    (contacts) => contacts.id === contactId
  );

  if (index === -1) {
    return undefined;
  }

  const newContacts = [
    ...contactsDatas.slice(0, index),
    ...contactsDatas.slice(index + 1)
  ];

  await writeContacts(newContacts);

  return contactsDatas[index];
}

async function addContact(name, email, phone) {
  let contactsData = await listContacts();

  if (!Array.isArray(contactsData)) {
    contactsData = [];
  }

  const newContact = { id: crypto.randomUUID(), name, email, phone };

  contactsData.push(newContact);

  await writeContacts(contactsData);

  return newContact;
}


module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
