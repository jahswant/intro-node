//Importing dictionnaire variable from dictionnaire.js
import {dictionnaire} from './dictionnaire.js'
//Importing read line with promises.
import {createInterface} from 'readline/promises'

//Creating an i/o interface.
const InterfaceLecture = createInterface({
 input: process.stdin,
 output:  process.stdout
});

//Generating a random index from to get a word in the array.
const indexAleatoire = Math.floor(Math.random() * dictionnaire.length);
//Getting Random word.
const motAleatoire = dictionnaire[indexAleatoire];
//Regex plit to create place holders.
const motCache = motAleatoire.replace(/[A-Z]/g,'_').split('');

console.log(motAleatoire);

while(motAleatoire!== motCache.join('')){
    // Current hidden word.
    console.log(motCache.join(' '));
    // Getting letter from user.
    let lettre = await InterfaceLecture.question('Entrez une lettre svp :');
    lettre = lettre[0];
    lettre = lettre.toUpperCase();
    //Chcking if entered word is in the array.
    for (let i=0; i<motAleatoire.length;i++){
        if (motAleatoire[i] === lettre){
            //Addling letter to the hidden word.
            motCache[i] = lettre;
        }
    }
    
}
// Final found word.
console.log(motCache.join(' '));
InterfaceLecture.close();

