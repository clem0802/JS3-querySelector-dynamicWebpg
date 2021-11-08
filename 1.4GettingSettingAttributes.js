// 2021.10.30 FROM (MM) 
/*----------------------------------*/
// GETTING SETTING ATTRIBUTES
// use JavaScript METHODS to change HTML attributes, like the links to an image for example


/*----------------------------------*/
/*----------------------------------*/
//! before changing the attribute, use the "querySelector" to store the "img" element inside the "el" VARIABLE 

//?** (HTML)
<!doctype html>
<html>
    <body> 
        <button onclick="displayAttribute()">Display Attribute</button>
        <br>
        <img src="https://mimo.app/r/cat.png">
        <script src="script.js"></script>
    </body>
</html>

//?** (JavaScript)
function displayAttribute() {
    var el = document.querySelector("img"); //! 
}





/*----------------------------------*/
/*----------------------------------*/
// we want to access the "img" element's "src" ATTRIBUTE and store it 
// now store it in a //! new VARIABLE called "imageLink"

//?** (HTML)
<!doctype html>
<html>
    <body> 
        <button onclick="displayAttribute()">Display Attribute</button>
        <br>
        <img src="https://mimo.app/r/cat.png">
        <script src="script.js"></script>
    </body>
</html>

//?** (JavaScript)
function displayAttribute() {
    var el = document.querySelector("img"); 
    var imageLink = ; //!  var imageLink = ;
}





/*----------------------------------*/
/*----------------------------------*/
//! getATTRIBUTE()
// this works with any ATTRIBUTES, like "href" from "a" ELEMENTS
// to get an attribute's value we use the "getAttribute()" METHOD

//?** (HTML)
<!doctype html>
<html>
    <body> 
        <button onclick="displayAttribute()">Display Attribute</button>
        <br>
        <img src="https://mimo.app/r/cat.png">
        <script src="script.js"></script>
    </body>
</html>

//?** (JavaScript)
function displayAttribute() {
    var el = document.querySelector("img"); 
    var imageLink = el.getAttribute(); //!  getAttribute()
}




/*----------------------------------*/
/*----------------------------------*/
// inside the parentheses, specify which ATTRIBUTE value we want 
// here we code "src" inside quotes to get the image link

//?** (HTML)
<!doctype html>
<html>
    <body> 
        <button onclick="displayAttribute()">Display Attribute</button>
        <br>
        <img src="https://mimo.app/r/cat.png">
        <script src="script.js"></script>
    </body>
</html>

//?** (JavaScript)
function displayAttribute() {
    var el = document.querySelector("img"); 
    var imageLink = el.getAttribute("src"); //!  "src"
}





/*----------------------------------*/
/*----------------------------------*/
// checout the output

//?** (HTML)
<!doctype html>
<html>
    <body> 
        <button onclick="displayAttribute()">Display Attribute</button>
        <br>
        <img src="https://mimo.app/r/cat.png">
        <script src="script.js"></script>
    </body>
</html>

//?** (JavaScript)
function displayAttribute() {
    var el = document.querySelector("img"); 
    var imageLink = el.getAttribute("src"); 
    console.log(imageLink); //! console.log()
}





/*----------------------------------*/
/*----------------------------------*/
//! getATTRIBUTE()
// this works with any ATTRIBUTES, like "href" from "a" ELEMENTS
// to get an attribute's value we use the "getAttribute()" METHOD
// 1st EXO

//?** (HTML)
<!doctype html>
<html>
    <body> 
        <button onclick="displayAttribute()">Display Attribute</button>
        <br>
        <a href="https://instagram.com">About Me</a>
        <script src="script.js"></script>
    </body>
</html>

//?** (JavaScript)
function displayAttribute() {
    var el = document.querySelector("a"); 
    var link = el.getAttribute("href");
    console.log(link);
}





/*----------------------------------*/
/*----------------------------------*/
//! getATTRIBUTE()
// "getAttribute()" METHOD also works if we want to get all the attributes values
// like multiple "style" ones for example
// 2nd EXO

//?** (HTML)
<!doctype html>
<html>
    <body> 
        <button onclick="displayAttribute()">Display Attribute</button>
        <br>
        <a style="color: red; font-size: 12px;" href="https://instagram.com">About Me</a> //! 
        <script src="script.js"></script>
    </body>
</html>

//?** (JavaScript)
function displayAttribute() {
    var el = document.querySelector("a"); 
    var imageStyle = el.getAttribute("style");
    console.log(imageStyle);
} 
// "About Me" words are in RED
// the link leads to a Instragram page





/*----------------------------------*/
/*----------------------------------*/
// what does this code display in the console? 
//! https://mimo.app/r/backpack.pn    // WITHOUT DOUBLE QUOTES

//?** (HTML)
<!doctype html>
<html>
    <body> 
        <button onclick="changeImage()">Display Attribute</button>
        <br>
        <img src="https://mimo.app/r/backpack.png"> //! 
        <script src="script.js"></script>
    </body>
</html>

//?** (JavaScript)
function changeImage() {
    var el = document.querySelector("img"); 
    var imageLink = el.getAttribute("src");
    console.log(imageLink);
} 
// "About Me" words are in RED
// the link leads to a Instragram page





/*----------------------------------*/
/*----------------------------------*/
// store the attribute VALUES in the correct VARIABLES

//?** (HTML)
<!doctype html>
<html>
    <body> 
        <button onclick="showAttribute()">Show Attribute</button>
        <br>
        <a style="color: teal; font-size: 15px;" href="https://mimo.app/r/cat.png">About Cat</a>
        <script src="script.js"></script>
    </body>
</html>

//?** (JavaScript)
function showAttribute() {
    var el = document.querySelector("a"); //! 
    var imageStyle = el.getAttribute("style"); //! 
    var imageLink = el.getAttribute("href"); //! 
    console.log(imageStyle + " " + imageLink);
} 





/*----------------------------------*/
/*----------------------------------*/
// display the "a" ELEMENT's "style" ATTRIBUTE

//?** (HTML)
<!doctype html>
<html>
    <body> 
        <button onclick="showAttribute()">Show Attribute</button>
        <br>
        <a style="color: red" href="https://mimo.app/r/cat.png">About Cat</a>
        <script src="script.js"></script>
    </body>
</html>

//?** (JavaScript)
function showAttribute() {
    var el = document.querySelector("a"); //! 
    var link = el.getAttribute("style"); //! 
    console.log(link);
} 
