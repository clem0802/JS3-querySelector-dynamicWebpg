// 2021.12.13 FROM (MM) 
/*----------------------------------*/
/*----------------------------------*/
DYNAMIC WEBPAGES (exos)
// to RINCLUDE elements


-how can we access a webpage from an included script?
=> through the "document" JavaScript object

<script src="script?js"></script>
-code the object that accesses the webpage
=> console.log(document); // the word "document"


/*----------------------------------*/ 
// store the TEXT of the "h2" element in the variable "text",
// by using "getelementById()" with the ID "article"
(HTML)
<!doctype html>
<html>
    <body>
      <h1>The New Yorker</h1>
      <h2>How to Identify Your Job by Its Category</h2>
      <script src="script.js"></script>
    </body>
</html>

(JavaScript)
var text = document.getElementById("article").innerHTML; // (.innerHTML)
