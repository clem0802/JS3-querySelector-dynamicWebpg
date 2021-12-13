// 2021.12.10 FROM (MM) 
/*----------------------------------*/
/*----------------------------------*/
DYNAMIC WEBPAGES (exos)
// to REMOVE elements

-which IDs should we set when removing nested elements?
=> the "parent ID" and the "child ID"

-removeChild():
=> it removes the nested element from its parent
=> we set the element we want to remove between the parentheses ()

-how do we make the code in the script more readable when removing elements? 
=> we save the parent element and the child element in variables

-which instructions do we use to remove an element from HTML code? 
=> "document.gertElementById" and ".removeChild()"

-what happens when we save elements we want to remove in variables later? 
=> we can use the variables instead of the elements in the "script"

-how do we save the parent and child elements after we access them?
=> we save them in variables


/*----------------------------------*/
<!doctype html>
<html>
    <body>
      <div id="parent">
        <h3 id="child">Space explorers</h3>
        <img src="https://mimo.app/i/bubu.png"></img>
      </div>

      <script>
          var div = document.getElementById("parent");
          var heading = document.createElement("child");
          div.removeChild(heading); // this removes the child element "VAR heading" (h3) from div
      </script>
    </body>
</html>


/*----------------------------------*/
// => only "Bill Evans" will display
<!DOCTYPE html>
<html>
    <body>
        <ul id="list">Jazz Pianists
            <li>Bill Evans</li>
            <li id="dave">Dave Brubeck</li>
        </ul>

        <script>
            var list = document.geteElementById("list");
            var pianist = document.getElementById("dave");
            list.removeChild(pianist); // PARENT variable + CHILD variable
        </script>
    </body>
</html>


/*----------------------------------*/
// => remove the list item that contains "Dexter"
<!DOCTYPE html>
<html>
    <body id="main">
        <ul id="list">Functional Scientists
            <li id="heinz">Heinz Doofenshmirtz</li>
            <li id="rick">Rick Sanchez</li>
            <li id="dexter">Dexter</li>
        </ul>

        <script>
            var list = document.geteElementById("list");
            var dexter = document.getElementById("dexter");
            list.removeChild(dexter); // (use PARENT variable name: "list")
        </script>
    </body>
</html>
