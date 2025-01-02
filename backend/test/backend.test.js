// Require expect library from chai for testing.
const expect = require("chai").expect;
// Required isomorphic-fetch for making fetch requests.
const fetch = require("isomorphic-fetch");

/*
 * Mocha's "describe" and "it" functions create and organise the tests.
 * Isomorphic fetch function fetches the data.
 * Create test assertion on the API data where the data fetched must be the name of the artist and the type of media (song).
 * Create test assertion on the response to make sure the network status code's response is equal 200 (OK).
 */

describe("Status status test", function (done) {
  it("Server connects with the frontend", function () {
    fetch("http://localhost:3000", function (res) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
});

describe("Status status test", function (done) {
  it("Server fetches the specified search request", function () {
    fetch(
      "http://localhost:8080/search?name=jack+jackson&type=song",
      function (res) {
        expect(res.statusCode).to.equal(200);
        done();
      }
    );
  });
});
