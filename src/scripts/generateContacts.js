import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();
    for (let i = 1; i <= number; i += 1) {
      const bd = createFakeContact();
      contacts.push(bd);
    }

    writeContacts(contacts);
    console.log('The request has been completed');
  } catch (error) {
    console.error(error);
  }
};

generateContacts(5);
