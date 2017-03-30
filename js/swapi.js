function listCharacter() {
  var people_api = "http://swapi.co/api/people/";
  for (var i = 1; i <= 87; i++) {
  $.ajax({url: people_api + i, success: function(result) {
    var character = result.name,
        gender = result.gender,
        height = result.height,
        weight = result.mass,
        dob = result.birth_year,
        homeworld = result.homeworld;
        films = result.films,
        species = result.species,
        vehicles = result.vehicles,
        url = result.url[result.url.length -2];
    $('div#list_character').append("<div id='" + url + "'>" + character + "</br>");
    console.log(url);
    }});
  }
}

function listFilm() {
  var films_api = "http://swapi.co/api/films/";
  for (var i = 1; i <= 6; i++) {
  $.ajax({url: films_api + i, success: function(result) {
    var film = result.title,
        episode = result.episode_id,
        release = result.release_date,
        url = result.url[result.url.length -2];
        $('div#list_film').append("<div id='" + url + "'>" + film + "</br>");
    }});
  }
}

function listVehicle() {
  var vehicles_api = "http://swapi.co/api/vehicles/";
  for (var i = 1; i <= 39; i++) {
  $.ajax({url: vehicles_api + i, success: function(result) {
    var vehicle = result.name,
        crew = result.crew,
        length = result.length,
        manufac = result.manufacuterer,
        pilots = result.pilots,
        films = result.films;
        url = result.url[result.url.length -2];
    $('div#list_vehicle').append("<div id='" + url + "'>" + vehicle + "</br>");
    }});
  }
}


$('span#characters').dblclick(listCharacter);
$('span#films').dblclick(listFilm);
$('span#vehicles').dblclick(listVehicle);
