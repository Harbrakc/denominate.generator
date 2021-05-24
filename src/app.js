/*let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];*/

/*thegreatjogger.com
thegreatracoon.com
ourgreatjogger.com
ourgreatracoon.com
thebigjogger.com
thebigracoon.com
ourbigjogger.com
ourbigracoon.com*/

/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

window.onload = function() {
  //write your code here
  document.querySelector("#resultado").innerHTML = `<ul>${generateUrl(
    pronoun,
    adj,
    noun
  )}</ul>`;
  console.log(generateUrl(pronoun, adj, noun));
};

function generateUrl(array1, array2, array3) {
  let resultado = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      for (let k = 0; k < array3.length; k++) {
        resultado.push(`<li>${array1[i]}${array2[j]}${array3[k]}.com</li>`);
      }
    }
  }
  let resultadoVivi = resultado.join("<br/>");
  return resultadoVivi;
}
