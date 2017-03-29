function listCharacter() {
  var people_api = "http://swapi.co/api/people/";
  for (var i = 1; i <= 87; i++) {
  $.ajax({url: people_api + i, success: function(result) {
    var character = result.name;
    $('div#list_character').append(character + "</br>");
    }});
  }
}

function listFilm() {
  var films_api = "http://swapi.co/api/films/";
  for (var i = 1; i <= 6; i++) {
  $.ajax({url: films_api + i, success: function(result) {
    var film = result.title;
    $('div#list_film').append(film + "</br>");
    console.log(film);
    }});
  }
}

function listVehicle() {
  var vehicles_api = "http://swapi.co/api/vehicles/";
  for (var i = 1; i <= 39; i++) {
  $.ajax({url: vehicles_api + i, success: function(result) {
    var vehicle = result.name;
    $('div#list_vehicle').append(vehicle + "</br>");
    }});
  }
}

$('span#characters').click(listCharacter);
$('span#films').click(listFilm);
$('span#vehicles').click(listVehicle);
