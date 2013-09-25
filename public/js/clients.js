function fetchClients() {
  $.ajax("js/clients.json?lat=" + current_latitude + "&lng=" + current_longitude, {
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
  var status = $('nav a.selected:first').attr('data-status');

  var html = clientsHTML(clients["clients"][status], status);
  $("#clients_container").html(html);
}

function clientsHTML(clients, status) {
  var source   = $("#clients-template").html();
  var template = Handlebars.compile(source);
  var context = {clients:clients, status:status}
  var html    = template(context);

  return html;
}