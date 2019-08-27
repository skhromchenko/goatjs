const consts = require('../consts');
const common = require('../common');
const chakram = require("chakram");
const chai = require('chai');
const expect = chai.expect;
let baseUrl;

before(async function () {
  baseUrl = consts.baseUrl;
  let deckId;
  let newDec ;
  let twoCards;
});

describe("Deck of Cards API", function () {
  it("Create a method that requests a new dec", async function () {
    newDec = await common.requestNewDeck();
  });

  it("From the response, assign the deck ID to a variable", async function () {
    deckId = newDec.body.deck_id;
  });

  it("Make a request using the deck ID variable for 2 cards", async function () {
    twoCards = await chakram.get(`${baseUrl}/api/deck/${deckId}/draw/?count=2`);
  });
  
  it("Assert that the request was successful", async function () {
    expect(twoCards.body.success).to.be.equal(true);
  });
  
  it("Assert that the response deck ID matches the deck requested", async function () {
    expect(deckId).to.be.equal(twoCards.body.deck_id);
  });

  it("Assert that there are 50 cards remaining", async function () {
    expect(twoCards.body.remaining).to.be.equal(50);
  });
}); 
