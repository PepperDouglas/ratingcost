import f from './functions.js';
import fetch from 'node-fetch';

console.log(f.addition(3, 5))

fetch("https://api.chess.com/pub/player/dsebom")
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    console.log(myJson);
  })
  .catch(function (error) {
    console.log("Error: " + error);
  });
