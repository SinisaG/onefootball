onefootball
==========
##Specs:

### Basic version
 - start a new project using http://yeoman.io and push it to a public repo on GitHub
 - save the attached JSON file in a "/teams" directory and load it
 - display the content of the "players" array in a grid using "thumbnailSrc", "number", "position", "age", "firstName" and "lastName" and a few key statistics
 - make it responsive, from iPhone to very-large-screens

### Fancy version
 - setup a specific task to package a production build using grunt plugins (minify, CDN, concat)
 - make it look good :)
 - describe (and/or implement) other possible optimizations to speed up the page (DNS preftech, lazy loading, ...)

==========

### Req

For running this project, you will need

 - [Node](http://nodejs.org/)
 - [NPM] (https://www.npmjs.org/)
 - [Grunt] (http://gruntjs.com/)
 - [Bower] (http://bower.io/)

### Running the project locally

 - First we clone the project to desiered folder: ``` git clone git@github.com:SinisaG/onefootball.git ```
 - Then we install node packages and bower packages : ```npm install & bower install```
 - We are ready to run the project locally : ```grunt serve```	
 
### Distribution
 
 - To prepare for distribution we just need to run : ``` grunt ```
 - If we want to run it, to see how it looks, we can do ``` grunt serve:dist ```

###Optimization on packaging

Reads index.html for usemin blocks and does concat and uglify on javascript and cssmin on css files.

### Further optimization

We could also lazy load images, so that we only fetch image when it's visible.
Also make sure that what can be is served from CDN. 
In general we coud also do DNS prefetching, we could compress images that we have, use sprites if there would be a lot of icons...

### Optional 

In [index.html](app/index.html#L27-28) we can change ```container``` class to ```container-fluid``` , so we can take the whole surface of bigger screens.

Running example can be seen [here](http://siki.si:9000). 
