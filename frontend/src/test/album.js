// Imported axios to make HTTP requests
import axios from 'axios';

/*
 * We test to see if the the axios.get function works correctly by using the FirstAlbum() function.
 * A response is made to get the first album's title from the API which will thereafter be returned.
 */

async function FirstAlbum() {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/albums'
  );
  return response.data[0].title;
}

// We export album.js to be tested in album.test.js
export default FirstAlbum;

/*
Reference:
1. Volodymyr Hudyma. 2021. 3 Ways To Mock Axios In Jest. Retrieved 26 August 2022, from https://vhudyma-blog.eu/3-ways-to-mock-axios-in-jest/
*/
