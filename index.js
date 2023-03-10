// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Round up to the next multiple of 5</h1>`;


const roundToNext5 = n => {
  if (n % 5 === 0) {
    return n
  } else {
    let i = n
  while (i % 5 !== 0) {
    i++
  }
  return i
  }
}
console.log(roundToNext5(496678990908))
