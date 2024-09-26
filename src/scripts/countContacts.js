import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const lengthArr = await readContacts();
    return lengthArr.length;
  } catch (error) {
    console.error(error);
  }
};

console.log(await countContacts());
