var bestSellingAlbums = [
  [1956, "Harry Belafonte", "Calypso"],
  [1967, "The Monkees", "More of The Monkees"],
  [1968, "The Jimi Hendrix Experience", "Are You Experienced?"],
  [1974, "Elton John", "Goodbye Yellow Brick Road"],
  [1977, "Fleetwood Mac", "Rumours"],
  [1981, "REO Speedwagon", "Hi Infidelity"],
  [1983, "Michael Jackson", "Thriller"],
  [1985, "Bruce Springsteen", "Born in the U.S.A."],
  [1987, "Bon Jovi", "Slippery When Wet"],
  [1993, "Whitney Houston", "The Bodyguard"],
  [1996, "Alanis Morissette", "Jagged Little Pill"],
  [1997, "Spice Girls", "Spice"],
  [2000, "NSYNC", "No Strings Attached"],
  [2003, "50 Cent", "Get Rich or Die Tryin'"],
  [2009, "Taylor Swift", "Fearless"],
  [2011, "Adele", "21"],
];

const sayAlbumInfo = anArray => {
  if (anArray.length == 3) {
    var year = anArray[0];
    var artist = anArray[1];
    var album = anArray[2];

    return (
      `In ${year} the best selling album was ${album} by ${artist}`
    );
  } else {
    return `That array is not in the correct format`;
  }
}

var newYorkCity = {
  population: 8804190,
  "Median home value": "$635,200",
  medianRent: "$1,489",
  povertyRate: "17.3%",
  "Pop per square mile": 29303,
  counties: [
    "Bronx (The Bronx)",
    "Kings (Brooklyn)",
    "New York (Manhattan)",
    "Queens (Queens)",
    "Richmond (Staten Island)",
  ],
  boroughPopulations: {
    bronx: 1472654,
    brooklyn: 2736074,
    manhattan: 1694263,
    queens: 2405464,
    staten: 495747,
  },
  settled: 1624,
  mayor: "Eric Adams",
  squareMiles: 472.43,
  calcManhattanPercentage: () => {
    var manhattanPercent = newYorkCity.boroughPopulations.manhattan / newYorkCity.population;
    console.log(`${manhattanPercent.toFixed(4) * 100}%`);
  },
  comparePopulation: (city, population) => {
    if (this.population < population) {
      console.log(`NYC is smaller than ${city}`);
    } else {
      console.log(`NYC is bigger than ${city}`);
    }
  },
};

const findBestSellingAlbumByYear = year => {
  var albumToReturn = null;
  for (var i = 0; i < bestSellingAlbums.length; i++) {
    var currentItem = bestSellingAlbums[i];
    var yearCurrentItem = currentItem[0];
    var artistCurrentItem = currentItem[1];
    var albumCurrentItem = currentItem[2];
    
    if (year == yearCurrentItem) {
      albumToReturn = `The best selling album of ${yearCurrentItem} was ${albumCurrentItem} by ${artistCurrentItem}`
      
    }
  }
  if (albumToReturn !== null) {
    return albumToReturn
  } else {
    return "I do not know."
  }
}

// #1: There are four functions above.  Make THREE of these arrow functions: sayAlbumInfo, comparePopulation, and findBestSellingAlbumByYear.  Call all three functions to make sure they still work.

console.log(sayAlbumInfo([1956, "Harry Belafonte", "Calypso"]))
newYorkCity.comparePopulation("Boston", 123345)
console.log(findBestSellingAlbumByYear(1974))

// #2: Next, make all FOUR functions use template literals in any place where they log or return a concatenated string.  Then, make sure the functions still work.

newYorkCity.calcManhattanPercentage()


// #3: Here is a simple object:

var myObj = {
  myName: "Louise",
  regularFunction: function () {
    console.log("-- REGULAR FUNCTION --");
    console.log(this);
    // console.log(this.myName)
  },
  arrowFunction: () => {
    console.log("-- ARROW FUNCTION --");
    console.log(this);
    // console.log(this.myName)
  },
};

// Call both functions in the object.  Notice the difference in what "this" refers to in the console.

myObj.regularFunction()
myObj.arrowFunction()

// NOTE: Arrow functions and regular functions handle the "this" keyword differently.  With a regular function, "this" represents the object that CALLS the function.  With an arrow function, this represents the OWNER of the function.




// #4: Google "highest level object of javascript" and read the short paragraph at the top of the search page.

// Whenever you call console.log, you're actually calling it on the "window" object:

window.console.log("Testing console.log :");
window.console.log(this);

// Knowing this, what is the OWNER of the .log function?  What is the CALLER of the .log function?  Do you think that "under the hood of JavaScript" the .log function is an arrow function or a regular function?

// OWNER IS THE WINDOW OBJECT
// CALLER IS THE CONSOLE (WHICH IS ON THE WINDOW OBJECT)


// #5:  Why do these both log the same thing?

console.log(bestSellingAlbums)
console.log(window.bestSellingAlbums)




// # 6: Turn calcManhattanPercentage into an arrow function.  You may need to fix the "this" references in the function to make it work now that it is an arrow function.  Call the function to test it.




// CALLBACKS

// A "callback function" is a function that gets passed as an argument to another function, and then gets called in the other function.

// This is a function that will be passed as a callback:
const generateRandomNumber = () => {
  var randomNumber = Math.round(Math.random()*1000)
  return randomNumber
};

// This is a function that needs a callback as an argument in order to work:
const myOwnLoopFunction = (callBack, numTimesToLoop) => {
  for (var i = 0; i < numTimesToLoop; i++){
    console.log(callBack())
  }
};

// #7: Call myOwnLoopFunction with generateRandomNumber as its callback.

myOwnLoopFunction(generateRandomNumber, 20)

// #8: Write a function called alertAndLog with a parameter called thing.  Make the function do console.log(thing) and alert(thing)

const alertAndLog = (thing) => {
  console.log(thing);
  alert(thing)
}


// Now write a function called addNumbers.  It should add two numbers that are passed as arguments, and it should also take a callback as a third argument. It should pass the sum of the two numbers to callback.

const addNumbers = (num1, num2, callBack) => {
  var sum = num1 + num2
  callBack(sum)
}


// Call addNumbers and use alertAndLog as it's callback.

addNumbers(1, 2, alertAndLog);