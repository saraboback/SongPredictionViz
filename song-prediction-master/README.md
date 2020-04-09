# Song Prediction

This app (available on https://elastic-curran-c983f0.netlify.com/) shows several graphs that allow us to interpret the initial song prediction dataset and the model output.

## Description

The scatterplots give the user an overview of the song dataset.  
For the first one, the blue dots represent a song that is not a _hit_, while the red ones represent a _hit_ song. For the second scatterplot, the red dots represent the songs that the model had succesfully predicted if the song would be a _hit_.  
The plotted properties can be dynamically changed by updating the two axis dropdowns.

> NOTE: because the loaded dataset is quite large, depending on your internet connection speed, the app will load pretty slow (at least the first time):
> !['dataset'](https://i.ibb.co/sg8vzVn/dataset.png, 'dataset')  
> That is why the first scatterplot only uses a small dataset (~100 elements), while the other visualisations are using the full dataset.

## Tech stach

This project is a web application that uses [react.js](https://reactjs.org/) as the rendering library.
It's only a frontend app (the end result is only a `html` + `css` bundle), but it does use [`node.js`](https://nodejs.org/) for the development process.

This project was bootstrapped using [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html), so all the usual tasks for running, building and testing the app are documented in [react-create-app.md](./react-create-app.md).

The visualisations are rendered as [SVG](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics) using [reaviz](https://reaviz.io/) - a react plotting library.

## How to run

> NOTE: You do need to have latest versions of `node` and `npm` installed on your machine before running this.

1. clone this repo locally
2. open a terminal inside the project folder
3. install project dependencies (by running `npm install` from the terminal)
4. run `npm start` to start the development environment
5. open the following address [http://localhost:3000/](http://localhost:3000/) in your browser (if it doesn't automatically)

## How to deploy

The app is hosted on [netlify](https://www.netlify.com/) and it is available on https://elastic-curran-c983f0.netlify.com/). Netlify is paired with the github repo and for every new commit in the `master` branch, there is a new deploy prepared.  
So, in order to get the latest code online, just push your changes to the `master` branch.
