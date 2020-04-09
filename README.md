# Song Prediction Visualizations

This app (available on https://elastic-curran-c983f0.netlify.com/) shows several graphs that allow us to interpret the initial song prediction dataset and the model output.

This visualization is a web application that uses react.js as the rendering library. It is a front-end application and the end result is an html and css bundle, however the application uses node.js for the development process. The project was bootstrapped using create-react-app, which is ideal for a single-page application as it sets up the development environment and optimizes the application for production. The visualisations are rendered as scalable vector graphics using reaviz, a react plotting library.

The scatter-plots provide an overview of the song data-set.
For the first one, the blue dots represent a song that is not a hit, while the red dots represent a hit song. For the second scatter plot, the red dots represent the songs that the model had successfully predicted if the song would be a hit. The plotted properties can be dynamically changed by updating the two axis drop-downs with all of the high or low-level features. 
