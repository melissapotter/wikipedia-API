function handleSubmit(){
  const xhttp = new XMLHttpRequest();
  const submitValue = document.getElementById("searchField").value;
  const url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch='" + submitValue + "'";
  xhttp.open("GET", url, true);
  xhttp.responseType = 'text';
  
  xhttp.onload = function () {
    	if (xhttp.status >= 200 && xhttp.status < 300) {
    	var data = JSON.parse(xhttp.responseText);
		console.log (data);
		xhttp.responseText.forEach(function (results) {
		var title = results.query.pages[0].title;
		console.log(title);
	});
    }
  };
        //     //for troubleshooting purposes
        //     console.log(xhttp.responseText);
        //     console.log(url);
        // //displays JSON in front end
	       // document.getElementById("results").innerHTML = xhttp.responseText;
	xhttp.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    xhttp.send();
}
    

    

    

        

