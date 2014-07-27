/*

Div Slider Version: 0.1.0
By Konstantino Sparakis
Copyright (c) 2014

Div Slider is 100% free and open-source.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the 'Software'), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
			  
$(document).ready(function() {
  
  
      var numberOfpages = 3;  //Change to number of pages you have

   //This hides all pages except the start at page
		var startAtPage = 0;  //Change to page # you want to start at || DEFAULT = 0;
		for(var i=0;i < numberOfpages+1;i++)
			  {
				    var fielder = "#page"+i;
				  if(i == startAtPage)
				  {
					//do nothing
					$(fielder).toggleClass('pages start-page');;
				  }
				  else{
					
					  $(fielder).hide(); 
				  }
			  }
			  
			  
    //Thanks goes out to TrazeK on stack overflow for assistance on this
    $('.forward').click(function() {
        $this = $(this);
        flipPage($this.data('current'), $this.data('next'));
    });
    $('.back').click(function() {
        $this = $(this);
        flipBack($this.data('current'), $this.data('back'));
    });
	
	
	//Slides  to the left for going to next page
     function flipPage(fromPage,toPage)
     {
        var fromPage = "#page"+ fromPage;
        var toPage = "#page"+ toPage;


                                           // v  Changes animaton duration
        $(fromPage).animate({left: '-150%'}, 500, function() {
                $(fromPage).hide();   
                $(toPage).animate({left: '20%'},200, function(){}).show();
        });

    }

     //slides to the right, for going back a page
    function flipBack(fromPage,toPage)
    {
        var fromPage = "#page"+ fromPage;
        var toPage = "#page"+ toPage;

        $(fromPage).animate({left: '150%'}, 500, function() {
            $(fromPage).hide();   
            $(toPage).animate({left: '20%'},200, function(){}).show();
        });
    }
});