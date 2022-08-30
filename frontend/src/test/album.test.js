// Imported axios to make HTTP requests
import axios from 'axios';
// Imported AlbumTitle to perform the test.
import FirstAlbum from './album.js';

/**
 * To mock axios in Jest, the jest.mock() function is used.
 * A response is created and mocked axios is used to return it: axios.get.mockResolvedValue.
 * The returned title is expected to be the first album.
 */

jest.mock('axios');

it('Returns the title of the first album.', async () => {
  axios.get.mockResolvedValue({
    data: [
      {
        userId: 1,
        id: 1,
        title: 'quidem molestiae enim',
      },
      {
        userId: 1,
        id: 2,
        title: 'sunt qui excepturi placeat culpa',
      },
    ],
  });

  const title = await FirstAlbum();
  expect(title).toEqual('quidem molestiae enim');
});

/*
Reference:
1. Volodymyr Hudyma. 2021. 3 Ways To Mock Axios In Jest. Retrieved 26 August 2022, from https://vhudyma-blog.eu/3-ways-to-mock-axios-in-jest/
*/
