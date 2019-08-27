const consts = require('./consts');
const chakram = require('chakram');

let baseUrl = consts.baseUrl;

module.exports = {
    //Request a new deck
    requestNewDeck: async function () {
        let response = await chakram.get(`${baseUrl}/api/deck/new/`);
        return response;
    }
};