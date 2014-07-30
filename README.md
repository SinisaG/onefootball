onefootball
==========
Req:

# Basic version
 - start a new project using http://yeoman.io and push it to a public repo on GitHub
 - save the attached JSON file in a "/teams" directory and load it
 - display the content of the "players" array in a grid using "thumbnailSrc", "number", "position", "age", "firstName" and "lastName" and a few key statistics
 - make it responsive, from iPhone to very-large-screens

# Fancy version
 - setup a specific task to package a production build using grunt plugins (minify, CDN, concat)
 - make it look good :)
 - describe (and/or implement) other possible optimizations to speed up the page (DNS preftech, lazy loading, ...)

# Running the project locally

 - First we clone the project to desiered folder: ``` git clone git@github.com:SinisaG/onefootball.git ```
 - Then we install node packages and bower packages : ```npm install & bower install```
 - We are ready to run the project locally : ```grunt serve```
 
 # Distribution
 
 - To prepare for distribution we just need to run : ``` grunt ```
 - If we want to run it, to see how it looks, we can do ``` grunt serve:dist ```
 