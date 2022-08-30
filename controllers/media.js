// Requiring Express.
const express = require('express');
// Requiring fetch.
const fetch = require('isomorphic-fetch');

/*
 * The iTunes API is used to return the respective media data.
 * The API's URL contains the term and media type received from the GET request query object.
 * This URL will return the search results made on request.
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
