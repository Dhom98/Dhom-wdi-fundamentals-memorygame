alert('Hello, friends.');

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"	
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];

function checkForMath(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");

}

}

function flipCard (){
	var cardID = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardID].rank);
	this.setAttribute('src', cards[cardID].cardImage);
	if (cardsInPlay.length === 2) {
	
	checkForMath();

}


}
function createBoard(){
	
	const gameTable = document.getElementById('game-board');
	for (var i=0; i<cards.length; i++){
		
		var cardElement = document.createElement('img');
		 cardElement.setAttribute('src', 'images/back.png');
		 cardElement.setAttribute('data-id', i);
		 cardElement.addEventListener('click', flipCard)
		 gameTable.appendChild(cardElement);

	}
}

createBoard();
















