const nounOneInput = document.getElementById('noun-one');
const verbInput = document.getElementById('verb');
const nounTwo = document.getElementById('noun-two');
const adjective = document.getElementById('adjective');
const number = document.getElementById('number');
const numberTwo = document.getElementById('number-2');

const blanks = document.getElementById('mad-lib');

function printMadLib() 
{
  nounOneSpan.textContent = nounOneInput.value;
  verbSpan.textContent = verbInput.value;
  nounTwoSpan.textContent = nounTwoInput.value;
  adjectiveSpan.textContent = adjectiveInput.value;
  numberOneSpan.textContent = numberOneInput.value;
  numberTwoSpan.textContent = numberTwoInput.value;
  blanks.classList.remove('hidden');
}