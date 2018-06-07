
//storing random tweets into one variable
    var quotes = [
                    {quote : "Easy is not to be underestimated.Easy taps the pool of talent and ideas out there that were turned off by hard",
                    author:"Chris Anderson"},
                    {
                        quote:"No masterpiece was ever created by a lazy artist. ",author:" Salvador Dali",
                    },
                    {
                        quote:"Everything we do communicates.",author:"Pete Episcopo",
                    },
                    {
                        quote:"Having a favourite colour is like having a favourite lung.",author:" Sara Genn",
                    },
                    {
                        quote:"The enemy of every author is not piracy, but obscurity",author:"Chris Anderson",
                    },
                    {
                        quote:"Dreams are great but reality is fine too",author:"Richard Templar",
                    },
                    {
                        quote:"If you are going to jump of a bridge, make sure you know how deep is the water is.",author:"Richard Templar",
                    },
                    {
                        quote:"You'll get older but not necessarily wiser",author:"Richard Templar",
                    },
                    {
                        quote:"We tend to forget there’s more to design than designing.",author:"Justin Ahrens",
                    },
                    {
                        quote:"If design becomes your life, you can be sure a lot of people will be making their living thanks to your designs.",author:"Andrés Contenti",
                    }
                ]
      
                var tweets = "";  
                function random() {
                    return Math.floor(Math.random() * Math.floor(quotes.length));
                }
                function tweetThiss(){
                    var {quote,author} = quotes[random()];
                 $("a").attr("href", 'https://twitter.com/intent/tweet?text='+ encodeURIComponent(quote) + ' - ' + encodeURIComponent(author))}

                $(document).ready(function(){
                    tweetThiss();
                    $("a").on("click", tweetThiss);
                    
                });
               
                
                 $(document).ready(function(){   
                $("#request").click(function(){
                    
                 // array used to store quotes & Author that is continually stored and emptied. 
                   
                    var i = Math.floor(Math.random() * Math.floor(quotes.length));
                    tweets = quotes[i].quote + " - " + quotes[i].author;
                // giving the var tweets value
                // quotes[i].quote is when we access the var quotes at random [i] inside the pairs. 
                // same goes to quotes[i].author, we access the author pairs inside of the key quotes.  
                var html = "";  
                html += "<p id = 'message'> ''"+quotes[i].quote+"''"+ "<br>" + " - " + quotes[i].author+"</p>" ;
               
        
                // dont see any effect at all.... but logically used to remove and add quote into quotes var
              // quotes.splice(i, 1);
                
                    $(".quote").html(html);
                      });
                     
                    });
              
                   

                 