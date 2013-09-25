function fetchClients() {
  $.ajax("js/clients.json", {
    dataType:"json",
    error:function(error) {
      alert("Error in fetching clients :(\n\n" + error["statusText"]);
    },
    success:function(data) {
      loadClients(data);
    }
  });
}

function loadClients(clients) {
  loadCurrentClients(clients["clients"]["current"]);
  loadPotentialClients(clients["clients"]["potential"]);
}

function loadCurrentClients(clients) {
  var html = clientsHTML(clients, "info");
  $("#current_clients").append(html);
}

function loadPotentialClients(clients) {
  var html = clientsHTML(clients, "");
  $("#potential_clients").append(html);
}

function clientsHTML(clients, status) {
  var source   = $("#clients-template").html();
  var template = Handlebars.compile(source);
  var context = {clients:clients, status:status}
  var html    = template(context);

  return html;
}