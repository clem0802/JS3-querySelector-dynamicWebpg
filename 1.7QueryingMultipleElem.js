// 2021.10.30 FROM (MiMO) 
/*----------------------------------*/
// QUERYING MULTIPLE ELEMENTS


/*----------------------------------*/
/*----------------------------------*/
// so far retrieve multiple elements if they had the same TAG or CLASS name

//?? (HTML)
<!doctype html>
<html>
    <body> 
        <h3>Breaking News</h3>
        <h3>The Next Olympic Sport?</h3>
        <h3>The New Y-Phone</h3>
        <button onclick="displayItem()">Display the first heading element</button> //!
        <script src="script.js"></script>
    </body>
</html>

//?? (JavaScript)
function displayItem() {
    var el = document.querySelector("h3"); 
    console.log(el[0].innerHTML); //!
}
// the webpage displays the 3 <h3> content
// when click on the button, => Breaking News //!





/*----------------------------------*/
/*----------------------------------*/
//! querySelectorAll() METHOD
// METHODE above is another more powerful way of getting ARRAY-like lists of elements

//?? (HTML)
<!doctype html>
<html>
    <body> 
        <h3>Breaking News</h3>
        <h3>The Next Olympic Sport?</h3>
        <h3>The New Y-Phone</h3>
        <button onclick="displayItem()">Display the third heading element</button> //!
        <script src="script.js"></script>
    </body>
</html>

//?? (JavaScript)
function displayItem() {
    var el = document.querySelectorAll("h3"); //!
    console.log(el[2].innerHTML); //!
}
// the webpage displays the 3 <h3> content
// when click on the button, => The New Y-Phone //!





/*----------------------------------*/
/*----------------------------------*/
//! querySelectorAll()
// it works for both TAG and CLASS names

//?? (HTML)
<!doctype html>
<html>
    <body> 
        <ul>
            <li class="urgent">buy milk</li> //!
            <li class="urgent">call grandma</li> //!
            <li>workout</li>
        </ul>
        <button onclick="displayItems()">Display urgent tasks</button>
        <script src="script.js"></script>
    </body>
</html>

//?? (JavaScript)
function displayItems() {
    var el = document.querySelectorAll(".urgent"); //!
    console.log(el.length); 
}
// the webpage displays the three tasks 
// (output) in console when click on button: //!  2





/*----------------------------------*/
/*----------------------------------*/
// querySelectorAll()
//! (TAG.CLASS)
// can also be used to LOOK FOR specific elements, like "h3" element of CLASS "news"

//?? (HTML)
<!doctype html>
<html>
    <body> 
        <h3 class="movie gossip">Oscar Nominations Drama</h3>
        <h3 class="sports news">The Next Olympic Sport?</h3>
        <h3 class="tech news">The New Y-Phone</h3>
        
        <button onclick="displayItems()">Display number of news headings</button>
        <script src="script.js"></script>
    </body>
</html>

//?? (JavaScript)
function displayItems() {
    var el = document.querySelectorAll("h3.news"); //! ATTENTION  (TAG.CLASS)
    console.log(el.length); 
}
// the webpage displays the three movie headings
// (output) in console when click on button: //!  2





/*----------------------------------*/
/*----------------------------------*/
// querySelectorAll()
// this METHOD lets us do more advance searches
//! like ACCESSING ELEMENTS of two different CLASSES at the same time
// here, LOOK FOR elements of EITHER // CLASS "movie" or "tech"

//?? (HTML)
<!doctype html>
<html>
    <body> 
        <h3 class="movie">Oscar Nominations Drama</h3>
        <h3 class="sports">The Next Olympic Sport?</h3>
        <h3 class="tech">The New Y-Phone</h3>
        
        <button onclick="displayItems()">Display news headings</button>
        <script src="script.js"></script>
    </body>
</html>

//?? (JavaScript)
function displayItems() {
    var el = document.querySelectorAll(".movie.tech"); //! ATTENTION  (.MOVIE.TECH)
    console.log(el.length); 
}
// the webpage displays the three movie headings
// (output) in console when click on button: //!  2





/*----------------------------------*/
/*----------------------------------*/
// querySelectorAll()
// to get elements that belong to two different CLASSES
// just ADD one CLASS after the other separated by a comma (,)
// need to ADD a period (.) before the CLASS name
//! (.MOVIE, .TECH) => CLASS-CLASS

//?? (HTML)
<!doctype html>
<html>
    <body> 
        <h3 class="movie">Oscar Nominations Drama</h3>
        <h3 class="sports">The Next Olympic Sport?</h3>
        <h3 class="tech">The New Y-Phone</h3>
        
        <button onclick="displayItems()">Display news headings</button>
        <script src="script.js"></script>
    </body>
</html>

//?? (JavaScript)
function displayItems() {
    var el = document.querySelectorAll(".movie, .tech"); //! (.MOVIE, .TECH) => COMMA
    console.log(el.length); 
}
// the webpage displays the three movie headings
// (output) in console when click on button: //!  2





/*----------------------------------*/
/*----------------------------------*/
// querySelectorAll()
//! (.MOVIE, .TECH, BUTTON) => CLASS-CLASS-TAG
// can even COMBINE selectors like CLASSES, TAGS, or IDs
// ADD the "button" TAG name to retrieve it also
// and display its text in the console

//?? (HTML)
<!doctype html>
<html>
    <body> 
        <h3 class="movie">Oscar Nominations Drama</h3>
        <h3 class="sports">The Next Olympic Sport?</h3>
        <h3 class="tech">The New Y-Phone</h3>(.MOVIE, .TECH, BUTTON) 

//?? (JavaScript)
function displayItems() {
    var el = document.querySelectorAll(".movie, .tech, button"); //! (.MOVIE, .TECH, BUTTON) 
    console.log(el[2].length); 
}
// the webpage displays the three movie headings
// (output) in console when click on button: //!  2





/*----------------------------------*/
/*----------------------------------*/
// querySelectorAll()
// see result

//?? (HTML)
<!doctype html>
<html>
    <body> 
        <h3>Oscar Nominations Drama</h3>
        <h3>The Next Olympic Sport?</h3>
        <h3>The New Y-Phone</h3>
        <button onclick="displayItem()">Display the third heading</button> 
        <script src="script.js"></script>
    </body>
</html>

//?? (JavaScript)
function displayItem() {
    var el = document.querySelectorAll("h3");
    console.log(el[2].innerHTML); 
}
// the webpage displays the three movie headings
// (output) in console when click on button: //!  The New Y-Phone





/*----------------------------------*/
/*----------------------------------*/
// querySelectorAll()
//! "BOTH" CLASSES
//! .SPORTS.NEWS    <= ATTENTION
// to retrieve the elements that have "BOTH" the CLASS "sports" AND "news"
// code  (.SPORTS.NEWS)
// so here, only 1 ELEMENT matches with this condition 

//?? (HTML)
<!doctype html>
<html>
    <body> 
        <h3 class="movie gossip">Oscar Nominations Drama</h3>
        <h3 class="sports news">The Next Olympic Sport?</h3>
        <h3 class="tech news">The New Y-Phone</h3>
        
        <button onclick="displayItems()">Display number of news headings</button>
        <script src="script.js"></script>
    </body>
</html>

//?? (JavaScript)
function displayItems() {
    var el = document.querySelectorAll(".sports.news"); //! 
    console.log(el[0].innerHTML); //! to retrieve the CONTENT
}
// the webpage displays the three movie headings
// (output) in console when click on button: //!  The Next Olympic Sport? 




/*----------------------------------*/
/*----------------------------------*/
// querySelectorAll()
//! "EITHER" CLASSE
//! .SPORTS, .TECH    <= ATTENTION
// to retrieve the elements that have "EITHER" the CLASS "sports" OR "news"
// code  (.SPORTS, .TECH)
// so here, 2 ELEMENTs match with this condition  .sports, .tech

//?? (HTML)
<!doctype html>
<html>
    <body> 
        <h3 class="movie">Oscar Nominations Drama</h3>
        <h3 class="sports">The Next Olympic Sport?</h3>
        <h3 class="tech">The New Y-Phone</h3>
        
        <button onclick="displayItems()">Display news headings</button>
        <script src="script.js"></script>
    </body>
</html>

//?? (JavaScript)
function displayItems() {
    var el = document.querySelectorAll(".sports, .tech"); //! 
    console.log(el.innerHTML); 
}
// the webpage displays the three movie headings
// (output) in console when click on button: //!  2





/*----------------------------------*/
/*----------------------------------*/
// querySelectorAll()
// code the "img" TAG name to retrieve it as the last element

//?? (HTML)
<!doctype html>
<html>
    <body> 
        <h3 class="movie">Oscar Nominations Drama</h3>
        <h3 class="sports">The Next Olympic Sport Announced</h3>
        <h3 class="tech">Fuzzy Whiskers runs for Mayor</h3>

        <img src="https://mimo.app/r/cat.png"></img>
        <br>
        <button onclick="displayItems()">DisplayImage Link</button>

        <script src="script.js"></script>
    </body>
</html>

//?? (JavaScript)
function displayItems() {
    var el = document.querySelectorAll(".movie, .sports, img"); //! 
    console.log(el[2].src); //!
}

// the webpage displays the three movie headings
// + the cat photo displayed
