function loadClients() {
  var currentClientsElement = document.getElementById("current_clients");
  var currentClientsListElement = currentClientsElement.getElementsByTagName("ul")[0];
  
  clients["clients"]["current"].forEach(function(element, index, array) { 
    var html = "";
    html += "<li class='info'>";
    html += "<h3>" + element["name"] + "</h3>";
    // Other hand written html
    html += "</li>";

    currentClientsListElement.innerHTML += html;
  });

  var currentClientsLoadingElement = currentClientsElement.getElementsByTagName("em")[0];
  currentClientsLoadingElement.parentNode.removeChild(currentClientsLoadingElement);
}