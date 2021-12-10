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
          div.removeChild(heading);
      </script>
    </body>
</html>
