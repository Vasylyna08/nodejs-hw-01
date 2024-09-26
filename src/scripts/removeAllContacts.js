import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const data = await writeContacts([]);
    return data;
  } catch (error) {
    console.error(error);
  }
};

removeAllContacts();
