//Importing file system with promises
import {readFile} from 'fs/promises'
//Reading fruits file
const data = await readFile('./fruits.txt');
//Converting data to string
const texte = data.toString();
//Removing possible accents from the file
const TexteSansAccents = texte.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
//Converting to uppercase
const textMajuscule = TexteSansAccents.toUpperCase();
//Splitting to an array.
const tableau = textMajuscule.split('\n');
//Filtering to remove any word where less that 3 chars.
const tableauFiltre = tableau.filter((mot) => mot.length >3);
//Exporting the final array for use in other modules.
export {tableauFiltre as dictionnaire}
