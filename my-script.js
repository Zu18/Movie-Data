let movieData = {
  "The Darjeeling Limited": {
    plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
    cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
    runtime: 151,
    rating: 7.2,
    year: 2007,
  },
  "The Royal Tenenbaums": {
    plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
    rating: 7.6,
    year: 2001,
    cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
    runtime: 170,
  },
  "Fantastic Mr. Fox": {
    year: 2009,
    plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
    cast: [
      "George Clooney",
      "Meryl Streep",
      "Bill Murray",
      "Jason Schwartzman",
    ],
    runtime: 147,
    rating: 7.9,
  },
  "The Grand Budapest Hotel": {
    rating: 8.1,
    runtime: 159,
    year: 2014,
    plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
  },
};


function displayMoviesTable() {
  var table = document.getElementById("myTable"); // Get the table element in which you want to add row
  for (const title in movieData) {
      const titleObj = movieData[title];
      var row = table.insertRow(1); // Create an empty <tr> element and add it to the 2nd position of the table: 
      var cell1 = row.insertCell(0); // Insert new cells (<td> elements) at the 1st position :
      var cell2 = row.insertCell(1); 
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      // Add data to the new cells:
      cell1.innerHTML = title;
      cell2.innerHTML = titleObj.plot;
      cell3.innerHTML = titleObj.rating;
      cell4.innerHTML = titleObj.year;
      cell5.innerHTML = titleObj.cast;
      cell6.innerHTML = titleObj.runtime;
  }
}


window.onload = displayMoviesTable();


