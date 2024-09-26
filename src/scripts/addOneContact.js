import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();

    const bd = createFakeContact();
    contacts.push(bd);

    writeContacts(contacts);
    console.log('The request has been completed');
  } catch (error) {
    console.error(error);
  }
};

addOneContact();
