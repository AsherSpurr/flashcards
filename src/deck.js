
function createDeck(cards) {
    var deck = cards.map((card) => {
        return card
    })
    return deck
}

function countCards(cardsDeck) {
    return cardsDeck.length
}

module.exports = {
    createDeck,
    countCards
}