// 2021.11.26 FROM (MM) 
/*----------------------------------*/
DYNAMIC WEBPAGES (exos)
// VAR (variables)


/*----------------------------------*/
/*----------------------------------*/
// variable
<!doctype html>
<html>
  <body>
     <h2>Museum Tickets</h2>
       <ul id="prices">
         <li>Adult</li>
         <li>Child</li>
         <li>Student</li>
       </ul>
     <script>
         var priceList = document.getElementById("prices"); // this VAR stores the list element
     </script>
  </body>
</html>


/*----------------------------------*/
/*----------------------------------*/
=> console.log will display as follow:
// MoMA Exhibitions
// Cy Twombly: A Retrospective

<!doctype html>
<html>
    <body>
        <h2 id="museum">MoMA Exhibitions</h2>
        <p>Cy Twombly: A Retrospective</p>
        <script>
            var museum = document.getElementById("museum");
            console.log(museum.innerHTML); //! variable name + .innerHTML
        </script>
    </body>
</html>


/*----------------------------------*/
/*----------------------------------*/
=> console.log will display as follow:
// EasyEco
// Small changes, big impact

<!doctype html>
<html>
    <body>
        <h2 id="name">Smart Recycling</h2>
        <p>Small changes, big impact</p>
        <script>
            var title = document.getElementById("name");
            title.innerHTML = "EasyEco";
        </script>
    </body>
</html>


/*----------------------------------*/
/*----------------------------------*/ 
=> Jolene's camera picture
=> console.log will display : "online"

<!doctype html>
<html>
    <body>
        <img src="https://mimo.app/r/jo.png">
        <h3>Jolene</h3>
        <p><em id="status">offline</em></p>
          
//         <script>
//             var status = document.getElementById("status");
//             status.innerHTML = "online";  // this did NOT update...
//         </script>

        <script>
            var status = document.getElementById("status");
            document.getElementById("status").innerHTML = "online";  // this did update!!
        </script>

    </body>
</html>


