$openBox = $('<div>')
function listCharacter() {
  var people_api = "http://swapi.co/api/people/";
  for (var i = 1; i <= 87; i++) {
  $.ajax({url: people_api + i, success: function(result) {
    var character = result.name,
        url = result.url.split('/'),
        url_id = url[url.length-2]
    $('div#list_character').append("<div class=character id='" + url_id + "'>" + character + "</br>");

    $('div#' + url_id + '.character').dblclick(function listCharacterDetails() {
      var character_api = "http://swapi.co/api/people/" + url_id;
      $.ajax({url: character_api, success: function(result) {
        var character = result.name,
            gender = result.gender,
            height = result.height,
            weight = result.mass,
            dob = result.birth_year,
            homeworld = result.homeworld;
            films = result.films,
            species = result.species,
            vehicles = result.vehicles
        $openBox.remove();
        $newDiv = $("<div class=details id='" + url_id + "'>" + "Gender: " + gender + "</br>" + "Height: " + height + "</br>" + "Weight: " + weight + "</br>" + "Homeworld: " + homeworld + "</div>");
        $('div#' + url_id + '.character').append($newDiv)
        $openBox = $newDiv
        }});
      })
    }});
  }
}

function listFilm() {
  var films_api = "http://swapi.co/api/films/";
  for (var i = 1; i <= 6; i++) {
  $.ajax({url: films_api + i, success: function(result) {
    var film = result.title,
        url = result.url.split('/'),
        url_id = url[url.length-2]
        $('div#list_film').append("<div class=film id='" + url_id + "'>" + film + "</div>");

        $('div#' + url_id + '.film').dblclick(function listFilmDetails() {
          var film_api = "http://swapi.co/api/films/" + url_id;
          $.ajax({url: film_api, success: function(result) {
            var film = result.title,
                episode = result.episode_id,
                release = result.release_date
            $openBox.remove();
            $newDiv = $("<div class=details id='" + url_id + "'>" + "Episode " + episode + "</br>" + "Release Date: " + release + "</div>");
            $('div#' + url_id + '.film').append($newDiv)
            $openBox = $newDiv
        }});
      });
    }});
  }
}

function listVehicle() {
  var vehicles_api = "http://swapi.co/api/vehicles/";
  for (var i = 1; i <= 39; i++) {
  $.ajax({url: vehicles_api + i, success: function(result) {
    var vehicle = result.name,
        url = result.url.split('/'),
        url_id = url[url.length-2]
    $('div#list_vehicle').append("<div class=vehicle id='" + url_id + "'>" + vehicle + "</div>");
    $('div#' + url_id + '.vehicle').dblclick(function listVehicleDetails() {
      var vehicle_api = "http://swapi.co/api/vehicles/" + url_id;
      $.ajax({url: vehicle_api, success: function(result) {
        var crew = result.crew,
            length = result.length,
            manufac = result.manufacturer,
            films = result.films
        $openBox.remove();
        $newDiv = $("<div class=details id='" + url_id + "'>" + "Length: " + length + "</br>" + "Crew capacity: " + crew + "</br>" + "Manufactured by: " + manufac + "</br>" + "Films: " + films + "</div>");
        $('div#' + url_id + '.vehicle').append($newDiv)
        $openBox = $newDiv
        }});
      });
    }});
  }
}

$('span#characters').dblclick(listCharacter);

$('span#films').dblclick(listFilm);
$('span#vehicles').dblclick(listVehicle);
