# Song Prediction

This app (available on https://elastic-curran-c983f0.netlify.com/) shows several graphs that allow us to interpret the initial song prediction dataset and the model output.

## Description

The scatterplots give the user an overview of the song dataset.  
For the first one, the blue dots represent a song that is not a _hit_, while the red ones represent a _hit_ song. For the second scatterplot, the red dots represent the songs that the model had succesfully predicted if the song would be a _hit_.  
The plotted properties can be dynamically changed by updating the two axis dropdowns.

> NOTE: because the loaded dataset is quite large, depending on your internet connection speed, the app will load pretty slow (at least the first time): That is why the first scatterplot only uses a small dataset (~100 elements), while the other visualisations are using the full dataset.

## Tech stach

This visualization is a web application that uses react.js as the rendering library. It is a front-end application and the end result is an html and css bundle, however the application uses node.js for the development process. The project was bootstrapped using create-react-app, which is ideal for a single-page application as it sets up the development environment and optimizes the application for production. The visualisations are rendered as scalable vector graphics using reaviz, a react plotting library.

The scatter-plots provide an overview of the song data-set. For the first one, the blue dots represent a song that is not a hit, while the red dots represent a hit song. For the second scatter plot, the red dots represent the songs that the model had successfully predicted if the song would be a hit. The plotted properties can be dynamically changed by updating the two axis drop-downs with all of the high or low-level features.

## How to run

> NOTE: You do need to have latest versions of `node` and `npm` installed on your machine before running this.

1. clone this repo locally
2. open a terminal inside the project folder
3. install project dependencies (by running `npm install` from the terminal)
4. run `npm start` to start the development environment
5. open the following address [http://localhost:3000/](http://localhost:3000/) in your browser (if it doesn't automatically)
