const nounOneInput = document.getElementById('noun-one-input');
const verbInput = document.getElementById('verb-input');
const nounTwoInput = document.getElementById('noun-two-input');
const adjectiveInput = document.getElementById('adjective-input');
const numberInput = document.getElementById('number-input');
const numberTwoInput = document.getElementById('number-2-input');
const blanks = document.getElementById('mad-lib');
function printMadLib() 
{
  nounOne.textContent = nounOneInput.value;
  verbSpan.textContent = verbInput.value;
   nounTwoSpan.textContent = nounTwoInput.value;
   adjectiveSpan.textContent = adjectiveInput.value;
   numberOneSpan.textContent = numberOneInput.value;
   numberTwoSpan.textContent = numberTwoInput.value;

  blanks.classList.remove('hidden');
}