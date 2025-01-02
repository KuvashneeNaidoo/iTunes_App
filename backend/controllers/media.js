const express = require("express");
const fetch = require("isomorphic-fetch");

/*
 * iTunes API returns the respective media data.
 * API's URL contains the term and media type received from the GET request query object.
 * URL will return the search results made on request.
 */

exports.getMedia = (req, res) => {
  fetch(
    `https://itunes.apple.com/search?term=${req.query.name}&entity=${req.query.type}`
  )
    .then((res) => res.json())
    .then((results) => {
      res.send(results);
    });
};
