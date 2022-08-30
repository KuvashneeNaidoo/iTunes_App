const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const helmet = require('helmet');
const routes = require('./routes/index.js');
const port = require('./config');

/**
 * We add our middleware.
 * Using express.json will allow the server to accept incoming json requests in a json format.
 * Morgan will help us to visualize our endpoints when testing out our server with Postman.
 * Cors is used to make requests to the server that is deployed at a different domain, thereby allowing Express and React to interact.
 */
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// To secure our Express.js app, we use the Helmet middleware
app.use(helmet());

// To use the routes we will enable the api.
app.use('/search', routes);

// In order for the Express server to access the project data, we will need to use the body-parser middleware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * We will call React build assets by changing this express file.
 * We make use of the production process whereby express.static middleware will be used to access files from the frontend index.html folder via HTTP.
 */
const path = require('path');
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'frontend/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
}

/**
 * To run our server, we specify that it listens to port number 8080 which we get from the environment variables.
 * You can find the EXPRESS_APP_PORT module from the config folder which is now stored in this variable called port.
 * We add a callback to confirm this and to navigate to the port.
 */
app.listen(port.EXPRESS_APP_PORT, () => {
  console.log(`Navigate to http://localhost:${port.EXPRESS_APP_PORT}/search`);
});

// I used this function below to initiate an error statement if an error occurs.
app.use(function (err, req, res, next) {
  console.log(err.stack);
  res.status(500).send('Something broke!');
});

/*
References:
1. Bhagatpratham. 2022. How to Set up a Node.js Express Server for React. Retrieved 20 August 2022, from https://towardsdev.com/how-to-set-up-a-node-js-express-server-for-react-c19104568d12
2. Eric the Coder. 2021. expressJS 6 Part Series. DEV Community. Retrieved 18 August 2022, from https://dev.to/ericchapman/series/15121
3. freeCodeCamp. 2018. How to create a React frontend and a Node/Express backend and connect them. Retrieved 20 August 2022, from https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/
4. HyperionDev. 2020.  Express II - Example. Retrieved 18 August 2022, from https://www.dropbox.com/s/f0956eg2nkjjiaq/Example.zip?dl=0
4. HyperionDev. 2021.  Full Stack with Express and React. Retrieved 20 August 2022, from https://www.dropbox.com/s/1ag33quwaff7bpf/WD%20L2T19%20-%20Full%20stack%20with%20Express%20and%20React%20.pdf?dl=0
5. HyperionDev. 2020. Task 18 Custom API. Retrieved 18 August 2022, from https://youtu.be/nX7jGHgD9t8
6. Slide Revolution. 2020. The Best Looking CSS Animated Background Examples. Retrieved 20 August 2022, from https://www.sliderrevolution.com/resources/css-animated-background/
*/
