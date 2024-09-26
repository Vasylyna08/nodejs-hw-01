import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length === 0) {
      console.log('The array is empty, nothing to delate');
      return;
    }
    contacts.pop();

    writeContacts(contacts);
    console.log('The request has been completed');
  } catch (error) {
    console.error(error);
  }
};

removeLastContact();
