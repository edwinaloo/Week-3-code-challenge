const films = document.querySelector('ul#films');

// Make a GET request to retrieve the movie data
fetch('http://localhost:3000/films')
  .then(response => response.json())
  .then(data => {
    // Loop through the movies and create an `li` element for each one
    data.forEach(movie => {
      const li = document.createElement('li');
      li.classList.add('film', 'item');
      li.textContent = movie.title;

      // Append the `li` element to the `ul#films` element
      films.appendChild(li);
    });
  });
  $(document).ready(function() {
    // Get movie data from endpoint
    $.get("https://movie-theater-api.herokuapp.com/movies", function(movies) {
      // Populate the film list
      var filmList = $("#films");
      $.each(movies, function(index, movie) {
        var filmItem = $("<li class='film item'></li>");
        var filmTitle = $("<h2>" + movie.title + "</h2>");
        var filmDescription = $("<p>" + movie.description + "</p>");
        var filmShowtime = $("<p>" + movie.showtime + "</p>");
        var filmAvailable = $("<p>Available Tickets: <span>" + movie.available_tickets + "</span></p>");
        var buyTicketButton = $("<button class='buy-ticket'>Buy Ticket</button>");
        buyTicketButton.click(function() {
          // Attempt to buy a ticket
          if (movie.available_tickets > 0) {
            movie.available_tickets--;
            filmAvailable.find("span").text(movie.available_tickets);
          }
        });
        filmItem.append(filmTitle);
        filmItem.append(filmDescription);
        filmItem.append(filmShowtime);
        filmItem.append(filmAvailable);
        filmItem.append(buyTicketButton);
        filmList.append(filmItem);
      });
    });
  });
  