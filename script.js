function handleSubmit(){
  const xhttp = new XMLHttpRequest();
  const submitValue = document.getElementById("searchField").value;
  var url = "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + submitValue + "&utf8=&format=json";
  
    xhttp.open("GET", url, true);
    xhttp.send();
    console.log(xhttp.responseText);
}