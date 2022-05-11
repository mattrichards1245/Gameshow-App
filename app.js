const startBtn = document.querySelector('.btn__reset')

startBtn.addEventListener('click', () => {
	const overlay = document.getElementById('overlay')
	if (overlay.className === 'start'){
	overlay.style.display = 'none';
	}
});

const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0

const phrases = [
	'Raining Cats And Dogs',
	'Out like a light',
	'Better late than never',
	'Bite the bullet',
	'Call it a day',

]

function getRandomPhraseAsArray (arr){
	const randPhrase = arr[Math.floor(Math.random() * arr.length)];
	const newPhrase = Array.from(randPhrase);

	return newPhrase
};
getRandomPhraseAsArray(phrases);
const phraseArray = getRandomPhraseAsArray(phrases);

function addPhraseToDisplay(arr){
	for (let i =  0; i < arr.length; i++){
		const li = document.createElement('li');
		const ul = document.getElementById('phrase')
		li.className = 'letter'
		li.textContent = (arr[i])
		if (arr[i] != ' '){
		ul.append(li)
		}
		else {
			li.className='space'
			li.textContent= '   '
			ul.append(li)
		}
	};
  }

  addPhraseToDisplay(phraseArray);

function checkLetter (button){
	const letterElements = document.querySelectorAll('.letter');
	
	let result = [];
	for (var i = 0; i <  letterElements.length; i++) {
       result.push(letterElements[i].textContent.toLowerCase());
    }
	
	let n = 0
	while (n < result.length)
	{
		if (button.textContent === result[n]){
			const currentletter = result[n]
			for (var t = 0; t <  letterElements.length; t++) {
				if (currentletter === letterElements[t].textContent.toLowerCase()){
					letterElements[t].classList.add('show');
				};
			 }
			const lttr = button.textContent
			return lttr
		}
		n += 1;	 
			
	}
	
	
		
}
function checkWin(){
	const le = document.querySelectorAll('.letter');
	const show = document.querySelectorAll('.show');
	const showcls = document.getElementsByClassName('show');
	const lecls = document.getElementsByClassName('letter');
	console.log(showcls.length)
	console.log(lecls.length)
	if (showcls.length === lecls.length){
		document.getElementById('overlay').className = 'win'
		document.getElementById('overlay').style.display='block'
		startBtn.addEventListener('click', () => {
			location.reload();
		
		});
	}
	else if (missed >= 5){
		document.getElementById('overlay').className = 'lose'
		document.getElementById('overlay').style.display='block'
		startBtn.addEventListener('click', () => {
			location.reload();
		
		});
	}

}
qwerty.addEventListener('click', (e) =>{
	const bttn = e.target
	console.log(bttn.tagName)
	if (bttn.tagName === 'BUTTON'){
	bttn.className = 'chosen';
	bttn.disabled = true;

	letterFound = checkLetter(bttn);
	console.log(letterFound)
	if (letterFound == null){
		
		const triesList = document.querySelector('ol');
		triesList.removeChild(triesList.firstElementChild);
		missed += 1;
	}
	checkWin();

}});
