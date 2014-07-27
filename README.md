Jquery-Div-Slider
=================

I needed a way to have the user acomplish things on a div and as soon as they were done, the div would slide off and a new one would appear. and thus the Div Slider was born.


##How to Use
----------------
First each div must have an id in the following naming fashion id="page0", you incriment the zero to add more pages.
...so in other words if I want a second page i create a div with the id="page1".

You must always start at page0, since a portion of the code hides all other pages is running on a for loop searching from 0 to the number of divs.

Set Up
-----------------
Note: This code uses twitter bootstraps.css jumbotron and conatiner classes and jQuery

Open the div-slider.js,

go to line #31,   var numberOfpages = 3; 
change 3 with the number of pages you are using. Must be at least 2.

Slide to left
-----------------
All you have to do is add data-next="1" data-current="0" if you want to slide to the left.
The numbers in the quotes are the page number you are interacting with, this number is given to a div from its id="page#". 

In data-current you put the page number of the div currently being displayed

In data-next you put the page number of the div you want to move to

Slide to Right
----------------
all you have to do is add data-back="1" data-current="0" if you want to slide to the right

In data-current you put the page number of the div currently being displayed

In data-back you put the page number of the div you want to move to


Optional Functions
-------------------

####Starting at a page number that is not 0.

Go to line #34 of the div-slider.js, at var startAtPage = 0; 
change the 0 with the page number you want to start at.


