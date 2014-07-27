Jquery-Div-Slider
=================

I needed a way to have the user acomplish things on a div and as soon as they were done, the div would slide off and a new one would appear. and thus the Div Slider was born.


##How to Use
--------------
First each div must have an id in the following naming fashion id="page0", you incriment the zero to add more pages.
...so in other words if I want a second page i create a div with the id="page1".

You must always start at page0, sine a portion of the code hides all other pages is running on a for loop searching from 0 to the number of divs.


Slide to left
-----------------
all you have to do is add data-next="1" data-current="0" if you want to slide to the left

Slide to Right
----------------
all you have to do is add data-back="1" data-current="0" if you want to slide to the right
