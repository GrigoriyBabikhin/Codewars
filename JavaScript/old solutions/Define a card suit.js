function defineSuit(card) {

    return {
        '♣': 'clubs',
        '♦': 'diamonds',
        '♥': 'hearts',
        '♠': 'spades',
    }[card[card.length - 1]]
}
console.log(defineSuit("7♠"))