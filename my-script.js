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

function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      //check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function ResetForm() {
  document.getElementById("movie").reset();
}

function addData() {
  var table = document.getElementById("myTable"); // Get the table element in which you want to add row
  var row = table.insertRow(1); // Create an empty <tr> element and add it to the 2nd position of the table: 
  var cell1 = row.insertCell(0); // Insert new cells (<td> elements) at the 1st position :
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  // Add data to the new cells:
  cell1.innerHTML = document.getElementById("title").value;
  cell2.innerHTML = document.getElementById("plot").value;
  cell3.innerHTML = document.getElementById("rating").value;
  cell4.innerHTML = document.getElementById("year").value;
  cell5.innerHTML = document.getElementById("cast").value;
  cell6.innerHTML = document.getElementById("runtime").value;
  movieData[document.getElementById("title").value] = {
      rating: document.getElementById("rating").value,
      runtime: Number(document.getElementById("runtime").value),
      year: Number(document.getElementById("year").value),
      plot: document.getElementById("plot").value,
      cast: document.getElementById("cast").value.split(','),
  };
  console.log(movieData);
  ResetForm();
}
//console.log(Object.values(movieData));

