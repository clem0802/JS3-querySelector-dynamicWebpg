// 2021.10.30 FROM (MM) 
/*----------------------------------*/
// GETTING SETTING ATTRIBUTES
// use JavaScript METHODS to change HTML attributes, like the links to an image for example


/*----------------------------------*/
/*----------------------------------*/
//! img ELEMENT stored inside the "el" VARIABLE
// to set an ATTRIBUTE, use the  setAttribute() METHOD after the VARIABLE name

// (HTML)
<!doctype html>
<html>
    <body> 
        <button onclick="changeImage()">Try it</button>
        <br>
        <img src="https://mimo.app/r/cat.png">
        <script src="script.js"></script>
    </body>
</html>

// (JavaScript)
function changeImage() {
    var el = document.querySelector("img"); //! img ELEMENT stored inside the "el" VARIABLE
    el.setAttribute();
}





/*----------------------------------*/
/*----------------------------------*/
// inside the parentheses, need to specify which ATTRIBUTE we want to set, like "src" in this case

// (HTML)
<!doctype html>
<html>
    <body> 
        <button onclick="changeImage()">Try it</button>
        <br>
        <img src="https://mimo.app/r/cat.png">
        <script src="script.js"></script>
    </body>
</html>

// (JavaScript)
function changeImage() {
    var el = document.querySelector("img"); 
    el.setAttribute("src"); //! we want to set "SRC"
}





/*----------------------------------*/
/*----------------------------------*/
// next, we provide the NEW VALUE for "SRC"
// we add the NEW VALUE after a "COMMA" and inside QUOTES
// now ress the button to change the LINK

// (HTML)
<!doctype html>
<html>
    <body> 
        <button onclick="changeImage()">Try it</button>
        <br>
        <img src="https://mimo.app/r/cat.png">
        <script src="script.js"></script>
    </body>
</html>

// (JavaScript)
function changeImage() {
    var el = document.querySelector("img"); 
    el.setAttribute("src","https://mimo.app/r/kittles.png"); //! CHANGE THE LINK
}





/*----------------------------------*/
/*----------------------------------*/
//! CHANGE-SET ATTRIBUTE VALUE TO A NEW ONE
//! display el.getAttribute("src")
// to see that the WEB ADDRESS actually changed

// (HTML)
<!doctype html>
<html>
    <body> 
        <button onclick="changeImage()">Try it</button>
        <br>
        <img src="https://mimo.app/r/cat.png">
        <script src="script.js"></script>
    </body>
</html>

// (JavaScript)
function changeImage() {
    var el = document.querySelector("img"); 
    el.setAttribute("src","https://mimo.app/r/kittles.png"); //! (SEE BELOW)
    console.log(el.getAttribute("src")); //! DISPLAY 
}
//! we SPECIFY inside the parentheses of  setAttribute()
//! BOTH the ATTRIBUTE we want to change and the NEW VALUE
// el.setAttribute doesn't need to be stored in a variable





/*----------------------------------*/
/*----------------------------------*/
//! change the "type" fot eh "input" element to "range"

// (HTML)
<!doctype html>
<html>
    <body> 
        <button onclick="changeType()">Try it</button>
        <br>
        <input type="date">
        <script src="script.js"></script>
    </body>
</html>

// (JavaScript)
function changeType() {
    var el = document.querySelector("input"); 
    el.setAttribute("type","range"); 
}
// (output) first there is a CALENDAR (date)
// (output) when click on "Try it", the calender changed to a RANGE BAR (range)





/*----------------------------------*/
/*----------------------------------*/
// add a PLACEHOLER element and set its value to "1234"

// (HTML)
<!doctype html>
<html>
    <body> 
        <button onclick="updateElement()">Add placeholder</button>
        <br>
        <input type="password">
        <script src="script.js"></script>
    </body>
</html>

// (JavaScript)
function updateElement() {
    var el = document.querySelector("input"); 
    el.setAttribute("placeholder","1234"); 
}
