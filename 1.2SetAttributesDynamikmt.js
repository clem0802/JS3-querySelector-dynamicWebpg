// 2021.10.29 FROM (MIMO) 
/*----------------------------------*/
// CHANGING ATTRIBUTES


/*----------------------------------*/
/*----------------------------------*/
// AN IMAGE (we can see the image directly)
// once have accessed an element with JavaScript, we can get its attributes by adding a (.) followed by the attribute nmae
// after we have stored an "img" element inside the "el" VARIABLE, we write "el.src" to get the attribute value

//?** (HTML)
<!doctype html>
<html>
    <body> 
        <button onclick="showAttribute()">Show Attribute Value</button>
        <br>
        <img src="https://mimo.app/r/cat.png">
        <script src="script.js"></script>
    </body>
</html>

//?** (JavaScript)
function showAttribute() {
    var el = document.querySelector("img"); //! 
    console.log(el.src); //!
}
// a button + a cat photo, displayed on webpage




/*----------------------------------*/
/*----------------------------------*/
// LINK OF A PHOTO
// most attrivutes can be accessed this way
// access and display the "href" attribute of the "a" element

//?** (HTML)
<!doctype html>
<html>
    <body> 
        <button onclick="showAttribute()">Display Attribute Value</button>
        <br>
        <a href="https://mimo.app/r/cat.png">Profile Photo</a>
        <script src="script.js"></script>
    </body>
</html>

//?** (JavaScript)
function showAttribute() {
    var el = document.querySelector("a"); //! 
    console.log(el.href); //!
}
// a button + a link, are displayed
// to see the photo, have to click on the photo link




/*----------------------------------*/
/*----------------------------------*/
// AN IMAGE (we can see the image directly)
// we can also update attribute values
// when doing so, we have to remember to place values in between quotes
// update the "src" attribute

//?** (HTML)
<!doctype html>
<html>
    <body> 
        <button onclick="changeAttribute()">Update photo</button>
        <br>
        <img src="https://mimo.app/r/cat.png">
        <script src="script.js"></script>
    </body>
</html>

//?** (JavaScript)
function changeAttribute() {
    var el = document.querySelector("img"); 
    el.src = "https://mimo.app/r/cat.png"; //! 
}
// a button + a cat photo, are displayed




/*----------------------------------*/
/*----------------------------------*/
// use attributes to change how elements work and behanve on a webpage
// change the "input" element's "type" ATTRIBUTE to "checkbox"

//?** (HTML)
<!doctype html>
<html>
    <body> 
        <button onclick="changeQuestionType()">Change Survey Option</button>
        <p>Submit answer</p>
        <input type="range"> //!
        <script src="script.js"></script>
    </body>
</html>

//?** (JavaScript)
function changeAttribute() {
    var el = document.querySelector("input"); //! 
    el.type = "checkbox"; //! 
}
// output: a bar with a small round button to slide




/*----------------------------------*/
/*----------------------------------*/
//! VERY HARD
// use attributes to change how elements work and behanve on a webpage
// change the "input" element's "type" ATTRIBUTE to "checkbox"

//?** (HTML)
<!doctype html>
<html>
    <head>
        <link rel="stylesheet" href=""> //! 
    </head>
    <body> 
        <button onclick="addStyleSheet()">Update website design</button>
        <br>
        <img src="https://mimo.app/r/forest.png">
        <script src="script.js"></script>
    </body>
</html>

//?** (CSS)
img {
    padding; 20px;
    background-color: aliceBlue;
    margin: 20px;
    border-radius: 30px;
}
button {
    margin: 20px;
}
body {
    background-color: #7e947e;
    text-align: center;
    height: 300px;
}


//?** (JavaScript)
function addStyleSheet() {
    var el = document.querySelector("link"); //! 
    el.href = "style.css"; //! 
}
// output: a button "Update website design" + photo of forest




/*----------------------------------*/
/*----------------------------------*/
// what will be displayed in the console?
// https://mimo.app/r/kittles.png  (as answer)

//?** (HTML)
<!doctype html>
<html>
    <body> 
        <img src="https://mimo.app/r/kittles.png">
        <script src="script.js"></script>
    </body>
</html>

//?** (JavaScript)
var el = document.querySelector("img"); //! 
console.log(el.src); 

// output: a cat photo




/*----------------------------------*/
/*----------------------------------*/
// what will be displayed in the console?

//?** (HTML)
<!doctype html>
<html>

    <body> 
        <button onclick="showAttribute()">Display Attribute Value</button>
        <br>
        <a href="https://mimo.app/r/cat.png">Profile Photo</a>
        <script src="script.js"></script>
    </body>
</html>

//?** (JavaScript)
function showAttribute() {
    var el = document.querySelector("a");
    el.href = "https://mimo.app/r/cat.png";
}
// link of a cat photo (output)




/*----------------------------------*/
/*----------------------------------*/
// what will be displayed in the console?
// https://mimo.app/r/clawdius.png  (as answer)

//?** (HTML)
<!doctype html>
<html>

    <body> 
        <button onclick="changeAttribute()">Update photo</button>
        <br>
        <img src="https://mimo.app/r/cat.png"></img>
        <script src="script.js"></script>
    </body>
</html>

//?** (JavaScript)
function showAttribute() {
    var el = document.querySelector("img");
    el.src = "https://mimo.app/r/clawdius.png";
    console.log(el.src);
}
// same cat photo displayed, but different link (output)




/*----------------------------------*/
/*----------------------------------*/
// what "type" value will the "input" element have at the end? 
//! "email"  (as answer), and NOT "checkbox"

//?** (HTML)
<!doctype html>
<html>
    <body> 
        <button onclick="changeQuestionType()">Change Survey Option</button>
        <p>Submit answer</p>
        <input type="range">
        <script src="script.js"></script>
    </body>
</html>

//?** (JavaScript)
function changeQuestionType() {
    var el = document.querySelector("input");
    el.type = "checkbox";
    el.type = "email"; //! 
}
// same cat photo displayed, but different link (output)




/*----------------------------------*/
/*----------------------------------*/
//! GREECE PHOTO
// after running the code, will this webpage be linked to a stylesheet?
// yes, we are dynamically setting the stylesheet with JavaScriopt code

//?** (HTML)
<!doctype html>
<html>
    <head>
        <link rel="stylesheet" href=""> //! 
    </head>
    <body> 
        <h3>Greek Holiday package</h3>
        <img src="https://mimo.app/r/greece.png">
        <script src="script.js"></script>
    </body>
</html>

//?** (CSS)
img {
    padding: 15px;
    background-color: aliceBlue;
    margin: 20px:
    width: 50%;
}
button {
    margin: 20px;
}
body {
    text-align: center;
}

//?** (JavaScript)
var el = document.querySelector("link");
el.href = "style.css"; //! 





/*----------------------------------*/
/*----------------------------------*/
// TYPE = "PASSWORD"; //! 
// PLACEHOLDER = "1234"; //! 
// use JavaScript to set the "input" element's "type"  and "placeholder" ATTRIBUTES
// yes,

//?** (HTML)
<!doctype html>
<html>
    <body> 
        <p>Enter password</p>
        <input type="" placeholder="">
        <script src="script.js"></script>
    </body>
</html>

//?** (JavaScript)
var el = document.querySelector("input");
el.type = "password";  //! 
el.placeholder = "1234";  //! 





/*----------------------------------*/
/*----------------------------------*/
//! GREECE PHOTO
// after running the code, will this webpage be linked to a stylesheet?
// yes, we are dynamically setting the stylesheet with JavaScriopt code

//?** (HTML)
<!doctype html>
<html>
    <head>
        <link rel="stylesheet" href=""> //! 
    </head>
    <body> 
        <button onclick="addFlexbox()">Add Flexbox Stylesheet</button>

        <div class="container">
            <div class="item">Home</div>
            <div class="item">About</div>
            <div class="item">Contact</div>
        </div>

        <script src="script.js"></script>
    </body>
</html>

//?** (CSS)
.container {
    background-color: #edc9b5;
    display: flex;
    flex-direction: rows;
    justify-content: center;
}
.item {
    background-color: #ffeccd;
    margin: 10px;
    padding: 5px;
    text-align: center;
}

//?** (JavaScript)
function addFlexbox() {
    var el = document.querySelector("link");
    el.href = "style.css";
}
