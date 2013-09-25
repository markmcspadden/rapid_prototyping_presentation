function loadClients() {
  loadCurrentClients();
  loadPotentialClients();
}

function loadCurrentClients() {
  var html = clientsHTML(clients["clients"]["current"], "info");
  $("#current_clients").append(html);
}

function loadPotentialClients() {
  var html = clientsHTML(clients["clients"]["potential"], "");
  $("#potential_clients").append(html);
}

function clientsHTML(clients, status) {
  var source   = $("#clients-template").html();
  var template = Handlebars.compile(source);
  var context = {clients:clients, status:status}
  var html    = template(context);

  return html;
}