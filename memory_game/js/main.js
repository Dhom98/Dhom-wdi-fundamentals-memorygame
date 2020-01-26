alert('Hello, friends.');

const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];

function checkForMath(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}

}

function flipCard (cardID){
	console.log("User flipped "+ cards[cardID]);
	cardsInPlay.push(cards[cardID]);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert ('You found a match!');
	}
	else {
		alert ('Sorry, try again');
	}
	checkForMath();
}


}

flipCard(0);
flipCard(2);

