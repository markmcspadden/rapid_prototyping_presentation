function loadClients() {
  var currentClientsElement = $("#current_clients");
  var currentClientsListElement = $("#current_clients ul:first");
  
  $.each(clients["clients"]["current"], function(index, element) { 
    var h3 = $('<h3></h3>');
    h3.text(element["name"]);

    var li = $('<li class="info"></li>');
    li.html(h3);

    currentClientsListElement.append(li);
  });

  $("#current_clients em:first").hide();
}