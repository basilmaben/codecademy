/* let sale = true;

sale = false;

if (sale) {
  console.log("Time to buy!");
} else {
  console.log("Time to wait for a sale.");
}
 */

/* let hungerLevel = 7;
if (hungerLevel < 7) {
  console.log("Time to eat!");
} else {
  console.log("We can eat later!");
}
 */

/* let mood = "sleepy";
let tirednessLevel = 6;
if (mood === "sleepy" && tirednessLevel > 8) {
  console.log("time to sleep");
} else {
  console.log("not bed time yet");
}
 */

/* let tool = "";

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || "pen";

console.log(`The ${writingUtensil} is mightier than the sword.`);
 */

/* let isLocked = true;
isLocked
  ? console.log("You will need a key to open the door.")
  : console.log("You will not need a key to open the door.");

let isCorrect = true;

isCorrect ? console.log("Correct!") : console.log("Incorrect!");

let favoritePhrase = "Love That!";

favoritePhrase === "Love That!"
  ? console.log("I love that!")
  : console.log("I don't love that!");
 */

/* let season = "summer";

if (season === "spring") {
  console.log("It's spring! The trees are budding!");
} else if (season === "winter") {
  console.log("It's winter! Everything is covered in snow.");
} else if (season === "fall") {
  console.log("It's fall! Leaves are falling!");
} else if (season === "summer") {
  console.log("It's sunny and warm because it's summer!");
} else {
  console.log("Invalid season.");
}
 */

/* let athleteFinalPosition = "first place";
switch (athleteFinalPosition) {
  case "first place":
    console.log("You get the gold medal!");
    break;
  case "second place":
    console.log("You get the silver medal!");
    break;
  case "third place":
    console.log("You get the bronze medal!");
    break;
  default:
    console.log("No medal awarded.");
    break;
} */

/* function sayThanks() {
  console.log("Thank you for your purchase! We appreciate your business.");
}
sayThanks();
sayThanks();
sayThanks(); */

/* function sayThanks(name) {
  console.log(
    `Thank you for your purchase ${name}! We appreciate your business.`
  );
}
sayThanks("Cole");
 */

/* function makeShoppingList(item1 = "milk", item2 = "bread", item3 = "eggs") {
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
//makeShoppingList('milk', 'bread', 'eggs') 
makeShoppingList(); */

/* function monitorCount(rows, columns) {
  return rows * columns;
}
const numOfMonitors = monitorCount(5, 4);

console.log(numOfMonitors);
 */
/* function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}
const totalCost = costOfMonitors(5, 4);
console.log(totalCost); */

/* const plantNeedsWater = function (day) {
  if (day === "Wednesday") {
    return true;
  } else {
    return false;
  }
};
plantNeedsWater("Tuesday");
console.log(plantNeedsWater()); */

/* const plantNeedsWater = (day) => {
  if (day === "Wednesday") {
    return true;
  } else {
    return false;
  }
};
console.log(plantNeedsWater("Wednesday")); */

/* const plantNeedsWater = (day) => (day === "Wednesday" ? true : false);
console.log(plantNeedsWater("Wednesday"));
 */

/* const city = "New York City";

const logCitySkyline = () => {
  let skyscraper = "Empire State Building";
  return "The stars over the " + skyscraper + " in " + city;
};
console.log(logCitySkyline()); */

/* const satellite = "The Moon";
const galaxy = "The Milky Way";
const stars = "North Star";

function callMyNightSky() {
  return "Night Sky: " + satellite + ", " + stars + ", and " + galaxy;
}
console.log(callMyNightSky());
 */

//Block Scope
/* const logVisibleLightWaves = () => {
  const lightWaves = "Moonlight";
  console.log(lightWaves);
};

logVisibleLightWaves(); */
/* console.log(lightWaves) */

//Scope Pollution
/* const satellite = "The Moon";
const galaxy = "The Milky Way";
let stars = "North Star";

const callMyNightSky = () => {
  stars = "Sirius";
  return "Night Sky: " + satellite + ", " + stars + ", " + galaxy;
};

console.log(callMyNightSky());
console.log(stars);
 */

//good scoping
/* const logVisibleLightWaves = () => {
  let lightWaves = "Moonlight";
  let region = "The Arctic";
  // Add if statement here:
  if (region === "The Arctic") {
    let lightWaves = "Northern Lights";
    console.log(lightWaves);
  }

  console.log(lightWaves);
};

logVisibleLightWaves();
 */

/* const hobbies = ["Programming", "Running", "Gaming"];
console.log(hobbies); */
/* 
const famousSayings = [
  "Fortune favors the brave.",
  "A joke is a very serious thing.",
  "Where there is love there is life."
];
var listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[2]);
 */

/* let condiments = ["Ketchup", "Mustard", "Soy Sauce", "Sriracha"];

const utensils = ["Fork", "Knife", "Chopsticks", "Spork"];

condiments[0] = "Mayo";
console.log(condiments);
condiments = ["Mayo"];
console.log(condiments);
utensils[3] = "Spoon";
console.log(utensils); */

/* const objectives = ["Learn a new languages", "Read 52 books", "Run a marathon"];
console.log(objectives.length); */

/* const chores = ["wash dishes", "do laundry", "take out trash"];
chores.push("program", "eat");
console.log(chores);
 */

/* const chores = [
  "wash dishes",
  "do laundry",
  "take out trash",
  "cook dinner",
  "mop floor"
];

chores.pop([4]);
console.log(chores); */

/* const groceryList = [
  "orange juice",
  "bananas",
  "coffee beans",
  "brown rice",
  "pasta",
  "coconut oil",
  "plantains"
];

groceryList.shift([0]);
console.log(groceryList);
groceryList.unshift("popcorn");
console.log(groceryList);
console.log(groceryList.slice(1, 4, 5, 6));
console.log(groceryList);
const pastaIndex = groceryList.indexOf("pasta");
console.log(pastaIndex);
 */

/* const concept = ["arrays", "can", "be", "mutated"];

function changeArr(arr) {
  arr[3] = "MUTATED";
}

changeArr(concept);
console.log(concept);

const removeElement = (newArr) => {
  newArr.pop();
};
removeElement(concept);
console.log(concept); */

/* let numberClusters = [
  [1, 2],
  [3, 4],
  [5, 6]
];
const target = numberClusters[2][1];
console.log(target); */

/* 
for (let counter = 3; counter >= 0; counter--) {
  console.log(counter);
}
 */

/* const vacationSpots = ["Bali", "Paris", "Tulum"];

// Write your code below
for (let i = 0; i < vacationSpots.length; i++) {
  console.log(`I would love to visit ${vacationSpots[i]}`);
}
 */

/* const bobsFollowers = ["ELd", "Len", "Ralph", "Van"];
const tinasFollowers = ["ELd", "Len", "Benn"];
const mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(tinasFollowers[j]);
      console.log(mutualFollowers);
    }
  }
} */

/* const cards = ["diamond", "spade", "heart", "club"];

// Write your code below
let currentCard;
while (currentCard !== "spade") {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
} */

/* let cupsOfSugarNeeded = 4;
let cupsAdded = 2;
do {
  cupsAdded = cupsOfSugarNeeded += cupsAdded;
  cupsAdded++;
} while (cupsAdded < cupsOfSugarNeeded);
console.log(cupsAdded); */

/* 
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
  if (rapperArray[i] === "Notorious B.I.G.") {
    break;
  }
}
console.log("And if you don't know, now you know.");
 */

/* const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for (let i = 1; i <= 1000000; i++) {
    if (2 + 2 !== 4) {
      console.log("Something has gone very wrong :( ");
    }
  }
};

// Write your code below
const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;

console.log(is2p2.name); */
/* 
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for (let i = 1; i <= 10; i++) {
    if (2 + 2 !== 4) {
      console.log("Something has gone very wrong :( ");
    }
  }
};

const addTwo = (num) => num + 2;

const timeFuncRuntime = (funcParameter) => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

// Write your code below
let time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

const checkConsistentOutput = (func, val) => {
  let firstTry = func(val);
  let secondTry = func(val);
  if (firstTry === secondTry) {
    return firstTry;
  } else {
    return "This function returned inconsistent results";
  }
};

console.log(time2p2);
console.log(checkConsistentOutput(addTwo, 3)); */

/* const artists = ["Picasso", "Kahlo", "Matisse", "Utamaro"];

artists.forEach((artist) => {
  console.log(artist + " is one of my favorite artists.");
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map((number) => {
  return number * number;
});

console.log(squareNumbers);

const things = ["desk", "chair", 5, "backpack", 3.14, 100];

const onlyNumbers = things.filter((thing) => {
  return typeof thing === "number";
});
const onlyStrings = things.filter((thing) => {
  return typeof thing === "string";
});

console.log(onlyNumbers);
console.log(onlyStrings); */

/* const fruits = ["mango", "papaya", "pineapple", "apple"];

// Iterate over fruits below
fruits.forEach((fruit) => console.log(`I want to eat a ${fruit}`));
 */

/* const animals = [
  "Hen",
  "elephant",
  "llama",
  "leopard",
  "ostrich",
  "Whale",
  "octopus",
  "rabbit",
  "lion",
  "dog"
];

// Create the secretMessage array below
const secretMessage = animals.map((animal) => {
  return animal[0];
});

console.log(secretMessage.join(""));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map((number) => {
  return number / 100;
});

console.log(smallNumbers); */

/* const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter((number) => {
  return number < 250;
});

const favoriteWords = [
  "nostalgia",
  "hyperbole",
  "fervent",
  "esoteric",
  "serene"
];

// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter((words) => {
  return words.length > 7;
});
console.log(longFavoriteWords);
console.log(smallNumbers); */

/* const animals = [
  "hippo",
  "tiger",
  "lion",
  "seal",
  "cheetah",
  "monkey",
  "salamander",
  "elephant"
];

const foundAnimal = animals.findIndex((animal) => {
  return animal === "elephant";
});
const startsWithS = animals.findIndex((animal) => {
  return animal[0] === "s";
});
console.log(foundAnimal);
console.log(startsWithS);
console.log(animals[7]);
console.log(animals[3]); */

/* const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log("The value of accumulator: ", accumulator);
  console.log("The value of currentValue: ", currentValue);
  return accumulator + currentValue;
}, 10);
console.log(newSum);
 */

/* const words = ["unique", "uncanny", "pique", "oxymoron", "guise"];

// Something is missing in the method call below

console.log(
  words.some((word) => {
    return word.length < 6;
  })
);

// Use filter to create a new array
const interestingWords = words.filter((word) => {
  return word.length > 5;
});

console.log(
  interestingWords.every((word) => {
    return word.length > 5;
  })
);
 */

/* let retreatMessage =
  "We no longer wish to conquer your planet. It is full of dogs, which we do not care for.";

// Write your code below
const alienShip = {
  retreat() {
    console.log(retreatMessage);
  },
  takeOff() {
    console.log("Spim... Borp... Glix... Blastoff!");
  }
};
alienShip.retreat();
alienShip.takeOff(); */

/* let spaceship = {
  passengers: [{ name: "OOPS" }],
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032
  },
  crew: {
    captain: {
      name: "Sandra",
      degree: "Computer Engineering",
      encourageTeam() {
        console.log("We got this!");
      },
      "favorite foods": ["cookies", "cakes", "candy", "spinach"]
    }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    "back-up": {
      battery: "Lithium",
      terabytes: 50
    }
  }
};
const capFave = spaceship.crew.captain["favorite foods"][0];
const firstPassenger = spaceship.passengers[0];
console.log(capFave);
console.log(firstPassenger);
 */

/* let spaceship = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth"
};

// Write your code below
const greenEnergy = (fuel) => {
  fuel["Fuel Type"] = "avocado oil";
};

const remotelyDisable = (obj) => {
  obj["disabled"] = true;
};

remotelyDisable(spaceship);
console.log(spaceship["disabled"]);
greenEnergy(spaceship);
console.log(spaceship["Fuel Type"]);
console.log(spaceship);
 */

/* 
let spaceship = {
  crew: {
    captain: {
      name: "Lily",
      degree: "Computer Engineering",
      cheerTeam() {
        console.log("You got this!");
      }
    },
    "chief officer": {
      name: "Dan",
      degree: "Aerospace Engineering",
      agree() {
        console.log("I agree, captain!");
      }
    },
    medic: {
      name: "Clementine",
      degree: "Physics",
      announce() {
        console.log(`Jets on!`);
      }
    },
    translator: {
      name: "Shauna",
      degree: "Conservation Science",
      powerFuel() {
        console.log("The tank is full!");
      }
    }
  }
};

// Write your code below
for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}
for (let crewMember in spaceship.crew) {
  console.log(
    `${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`
  );
}
 */

/* const robot = {
  model: "1E78V2",
  energyLevel: 100,

  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}`;
  }
};

console.log(robot.provideInfo());
 */

/* const robot = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`);
  }
};

robot.checkEnergy(); */

/* const robot = {
  _model: "1E78V2",
  _energyLevel: 100,
  get energyLevel() {
    if (typeof this._energyLevel === "number") {
      return "My current energy level is " + this._energyLevel;
    } else {
      return "System malfunction: cannot retrieve energy level";
    }
  }
};

console.log(robot.energyLevel);
 */

/* const robot = {
  _model: "1E78V2",
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors() {
    if (typeof this._numOfSensors === "number") {
      return this._numOfSensors;
    } else {
      return "Sensors are currently down.";
    }
  },
  set numOfSensors(num) {
    if (typeof num === "number" && num >= 0) {
      this._numOfSensors = num;
    } else {
      return "Pass in a number that is greater than or equal to 0";
    }
  }
};
robot.numOfSensors = 100;
console.log(robot.numOfSensors); */

/* const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log("Beep Boop");
    }
  };
};
const tinCan = robotFactory("P-500", true);

tinCan.beep();
console.log(tinCan.model);
console.log(tinCan.mobile); */

/* const robot = {
  model: "1E78V2",
  energyLevel: 100,
  functionality: {
    beep() {
      console.log("Beep Boop");
    },
    fireLaser() {
      console.log("Pew Pew");
    }
  }
};
const { functionality } = robot;
functionality.beep();
 */

/* const robot = {
  model: "SAL-1000",
  mobile: true,
  sentient: false,
  armor: "Steel-plated",
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot);
console.log(robotEntries);

// Declare newRobot below this line:

const newRobot = Object.assign(
  { laserBlaster: true, voiceRecognition: true },
  robot
);
console.log(newRobot); */

/* class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
  display() {
    console.log(`${this.name} and from ${this.department}`);
  }
}

let surg = new Surgeon("OOPS", "HOSP"); */

class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
  display() {
    console.log(`${this.name} ${this.department}`);
  }
}

const surgeonRomero = new Surgeon("Francisco Romero", "Cardiovascular");
const surgeonJackson = new Surgeon("Ruth Jackson", "Orthopedics");

surgeonJackson.display();
surgeonRomero.display();
