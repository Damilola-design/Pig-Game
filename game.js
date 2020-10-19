


var scores, roundScore, activePlayer, gamePlaying; 
init();
//scores = [0,0];
//roundScore = 0;
//activePlayer = 0;

//dice = Math.floor( Math.random() * 6) +1;
//console.log(dice);
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//var B ='girl'
//var x = document.querySelector('#score-0').textContent = B;
//console.log(x)

document.querySelector('.dice').style.display = 'none';
document.querySelector('.dice2').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function() {
	if (gamePlaying) {
		//1.Random number 
	var dice = Math.floor( Math.random() * 6) +1;
	var dice2 = Math.floor( Math.random() * 6) +1;
	//2. display the result 
	var diceDom = document.querySelector('.dice');
	var diceDo = document.querySelector('.dice2');
	diceDom.style.display = 'block';
	diceDo.style.display = 'block';
	diceDom.src = 'dice-' + dice + '.png';
	diceDo.src = 'dice-' + dice2 + '.png';


	//document.querySelector('.dice').style.display = 'block';

	//3. update score if it not one 
	if (dice, dice2 !== 12) {
		//Add score
		roundScore += dice + dice2;
		document.querySelector('#current-' + activePlayer).textContent = roundScore;

	} else{
		//Next player 
		nextPlayer();
		/*
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		roundScore = 0;
		document.getElementById('current-0').textContent = 0;
		document.getElementById('current-1').textContent = 0;

		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

		//document.querySelector('.player-0-panel').classList.remove('active');
		//document.querySelector('.player-1-panel').classList.add('active');

		document.querySelector('.dice').style.display = 'none';
		*/
	}

	}
});

	document.querySelector('.btn-hold').addEventListener('click', function() {
	if (gamePlaying) {
		// Add Current score to global score
	scores[activePlayer] += roundScore;

	// Update the UI
	document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];


	// Check if player won the game
	if(scores[activePlayer] >= 100){
		document.querySelector('#name-' + activePlayer).textContent = 'Winner!!';
		document.querySelector('.dice').style.display = 'none';
		document.querySelector('.dice2').style.display = 'none';
		document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner');
		document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active');
		gamePlaying = false;
	} else {
		nextPlayer();
	}
	}
		
});


function nextPlayer() {
	//Next player 
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		roundScore = 0;
		document.getElementById('current-0').textContent = 0;
		document.getElementById('current-1').textContent = 0;

		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

		//document.querySelector('.player-0-panel').classList.remove('active');
		//document.querySelector('.player-1-panel').classList.add('active');

		document.querySelector('.dice').style.display = 'none';
		document.querySelector('.dice2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);


function init() {
scores = [0,0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;

document.querySelector('.dice').style.display = 'none';
document.querySelector('.dice2').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'player 1';
document.getElementById('name-1').textContent = 'player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');


}
















