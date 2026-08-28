import { substract } from "./math.js";

const geth1 = document.querySelector("#showtext");
const answer = substract(10,4);

console.log(answer);

geth1.innerHTML = answer;