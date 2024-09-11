// Fetching flight data from the backend API
fetch('/users')
  .then(response => response.json()) // Parse the response JSON data
  .then(data => {
    console.log('Flight Data:', data); // Output the fetched data to the console

    // Find the HTML element where the flight data will be displayed
    const flightList = document.getElementById('flight-list');

    // Loop through each flight and create a list item (li) for it
    data.forEach(flight => {
      const flightItem = document.createElement('li');
      flightItem.textContent = `Flight Number: ${flight.flightNumber}, Airline: ${flight.airline}, 
        Departure: ${flight.departure.city} (${flight.departure.airport}) at ${flight.departure.time}, 
        Arrival: ${flight.arrival.city} (${flight.arrival.airport}) at ${flight.arrival.time}, 
        Price: $${flight.price}, Duration: ${flight.duration}, Stops: ${flight.stops}`;
      flightList.appendChild(flightItem);
    });
  })
  .catch(error => {
    console.error('Error fetching flight data:', error);
  });
