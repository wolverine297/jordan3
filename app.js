var scores,roundScore,activePlayer,dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

//dice = Math.floor(Math.random() * 6) + 1;

//document.querySelector('#current-' + activePlayer).textContent = dice;//textcontent only set plain text only no html
//by innerHTML we could change some changes too..for eg '<em> + dice </em>'

//var x = document.querySelector('#score-0').textContent;//its a getter value n it returns 43.
document.querySelector('.dice').style.display = 'none';
//an anonymous function is simply a function that doesnt have a name,so it cannot be reused.

document.querySelector('.btn-roll').addEventListener('click',function(){
 var dice = Math.floor(Math.random() * 6) + 1;

var diceDOM = document.querySelector('.dice');
diceDOM.style.display = 'block';
diceDOM.src = 'dice-' + dice + '.png';
});