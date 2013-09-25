function loadClients() {
  
  var source   = $("#clients-template").html();
  var template = Handlebars.compile(source);
  var context = {clients:clients["clients"]["current"]}
  var html    = template(context);


  $("#current_clients").append(html);
  
}