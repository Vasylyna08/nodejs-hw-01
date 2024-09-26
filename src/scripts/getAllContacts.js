import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const result = await readContacts();
    return result;
  } catch (error) {
    console.error(error);
  }
};

console.log(await getAllContacts());
