const { program } = require("commander");

const Contacts = require("./contacts");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await Contacts.listContacts();
      return console.table(contacts);
    case "get":
      const contact = await Contacts.getContactById(id);
      return console.table(contact);
    case "add":
      const addContacts = await Contacts.addContact(name,email,phone);
      return console.table(addContacts);
    case "remove":
      const removeContacts = await Contacts.removeContact(id);
      return console.table(removeContacts);
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const options = program.opts();

invokeAction(options);
