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
/* class Surgeon {
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
 */
/* class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get department() {
    return this._department;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

const surgeonRomero = new Surgeon("Francisco Romero", "Cardiovascular");
const surgeonJackson = new Surgeon("Ruth Jackson", "Orthopedics");

console.log(surgeonRomero.name);
console.log(surgeonRomero.takeVacationDays(3));
console.log(surgeonRomero.remainingVacationDays);
 */
/* class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  get name() {
    return this._name;
  }
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}
 */
/* class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }
}
const nurseOlynyk = new Nurse("Olynyk", ["Trauma", "Pediatrics"]);

nurseOlynyk.name(); */
/* class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }
}

const nurseOlynyk = new Nurse("Olynyk", ["Trauma", "Pediatrics"]);

nurseOlynyk.takeVacationDays(5);

console.log(nurseOlynyk.remainingVacationDays) */

/* class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }
  get certifications() {
    return this._certifications;
  }
  addCertification(newCertification) {
    this._certifications.push(newCertification);
  }
}

const nurseOlynyk = new Nurse("Olynyk", ["Trauma", "Pediatrics"]);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification("Genetics");
console.log(nurseOlynyk.certifications); */

/* class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
  static generatePassword() {
    return Math.floor(Math.random() * 10000);
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }

  get certifications() {
    return this._certifications;
  }

  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}

const nurseOlynyk = new Nurse("Olynyk", ["Trauma", "Pediatrics"]);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification("Genetics");
console.log(nurseOlynyk.certifications);
console.log(HospitalEmployee.generatePassword()); */

/* const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

// Write your code below:
const myExecutor = (resolve, reject) => {
  if (inventory.sunglasses > 0) {
    resolve("Sunglasses order processed.");
  } else {
    reject("That item is sold out.");
  }
};

const orderSunglasses = () => {
  return new Promise(myExecutor);
};
const orderPromise = orderSunglasses();

console.log(orderPromise); */

/* console.log("This is the first line of code in app.js.");
const usingSTO = () => {
  console.log("Hello World!");
};
setTimeout(usingSTO, 3000);
console.log("This is the last line of code in app.js.");
 */

/* const { checkInventory } = require("./library.js");

const order = [
  ["sunglasses", 1],
  ["bags", 2]
];

// Write your code below:

const handleSuccess = (resolve) => {
  console.log(resolve);
};
const handleFailure = (reject) => {
  console.log(reject);
}; */

/* 
const { checkInventory } = require("./library.js");

const order = [
  ["sunglasses", 1],
  ["bags", 2]
];

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectReason) => {
  console.log(rejectReason);
};

// Write your code below:

checkInventory(order).then(handleSuccess).catch(handleFailure);

checkInventory(order).then(handleSuccess, handleFailure); */

/* let a = {};
let b = {};

console.log(a === b); */

/* const { checkInventory, processPayment, shipOrder } = require("./library.js");

const order = {
  items: [
    ["sunglasses", 1],
    ["bags", 2]
  ],
  giftcardBalance: 79.82
};

checkInventory(order)
  .then((resolvedValueArray) => {
    // Write the correct return statement here:
  })
  .then((resolvedValueArray) => {
    // Write the correct return statement here:
  })
  .then((successMessage) => {
    console.log(successMessage);
  })
  .catch((errorMessage) => {
    console.log(errorMessage);
  }); */

/* const { checkInventory, processPayment, shipOrder } = require("./library.js");

const order = {
  items: [
    ["sunglasses", 1],
    ["bags", 2]
  ],
  giftcardBalance: 79.82
};

checkInventory(order)
  .then((resolvedValueArray) => {
    // Write the correct return statement here:
    return processPayment(resolvedValueArray);
  })
  .then((resolvedValueArray) => {
    // Write the correct return statement here:
    return shipOrder(resolvedValueArray);
  })
  .then((successMessage) => {
    console.log(successMessage);
  })
  .catch((errorMessage) => {
    console.log(errorMessage);
  });
 */

/* const { checkInventory, processPayment, shipOrder } = require("./library.js");

const order = {
  items: [
    ["sunglasses", 1],
    ["bags", 2]
  ],
  giftcardBalance: 79.82
};

// Refactor the code below:

checkInventory(order).then((resolvedValueArray) => {
  processPayment(resolvedValueArray).then((resolvedValueArray) => {
    shipOrder(resolvedValueArray).then((successMessage) => {
      console.log(successMessage);
    });
  });
}); */

/* function withConstructor(num) {
  return new Promise((resolve, reject) => {
    if (num === 0) {
      resolve("zero");
    } else {
      resolve("not zero");
    }
  });
}

withConstructor(0).then((resolveValue) => {
  console.log(
    ` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`
  );
}); */

/* PROMISES REVISION */
/* const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

// Write your code below:
const myExecutor = (resolve, reject) => {
  if (inventory.sunglasses > 0) {
    resolve("Sunglasses order processed.");
  } else {
    reject("That item is sold out.");
  }
};

const orderSunglasses = () => {
  return new Promise(myExecutor);
};

const orderPromise = orderSunglasses();

console.log(orderPromise);
 */

/* const returnPromiseFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(( ) => {resolve('I resolved!')}, 1000);
  });
};
 
const prom = returnPromiseFunction();
console.log(prom)
 */

/* console.log("This is the first line of code in app.js.");
// Keep the line above as the first line of code
// Write your code here:

const usingSTO = () => {
  console.log("Hello World");
};
setTimeout(usingSTO, 3000);

// Keep the line below as the last line of code:
console.log("This is the last line of code in app.js."); */

/* const { checkInventory } = require("./library.js");

const order = [
  ["sunglasses", 1],
  ["bags", 2]
];

// Write your code below:

const handleSuccess = (resolve) => {
  console.log(resolve);
};
const handleFailure = (reject) => {
  console.log(reject);
};
checkInventory(order).then(handleSuccess, handleFailure);
 */

/* const { checkInventory } = require("./library.js");

const order = [
  ["sunglasses", 1],
  ["bags", 2]
];

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectReason) => {
  console.log(rejectReason);
};

// Write your code below:
checkInventory(order).then(handleSuccess).catch(handleFailure);
 */

/* const { checkInventory, processPayment, shipOrder } = require("./library.js");

const order = {
  items: [
    ["sunglasses", 1],
    ["bags", 2]
  ],
  giftcardBalance: 79.82
};

checkInventory(order)
  .then((resolvedValueArray) => {
    // Write the correct return statement here:
    return processPayment(resolvedValueArray);
  })
  .then((resolvedValueArray) => {
    // Write the correct return statement here:
    return shipOrder(resolvedValueArray);
  })
  .then((successMessage) => {
    console.log(successMessage);
  })
  .catch((errorMessage) => {
    console.log(errorMessage);
  });
 */

/* const { checkInventory, processPayment, shipOrder } = require("./library.js");

const order = {
  items: [
    ["sunglasses", 1],
    ["bags", 2]
  ],
  giftcardBalance: 79.82
};

// Refactor the code below:

checkInventory(order)
  .then((resolvedValueArray) => {
    return processPayment(resolvedValueArray);
  })
  .then((resolvedValueArray) => {
    return shipOrder(resolvedValueArray);
  })
  .then((successMessage) => {
    console.log(successMessage);
  });
 */

/* const { checkAvailability } = require("./library.js");

const onFulfill = (itemsArray) => {
  console.log(`Items checked: ${itemsArray}`);
  console.log(
    `Every item was available from the distributor. Placing order now.`
  );
};

const onReject = (rejectionReason) => {
  console.log(rejectionReason);
};

// Write your code below:
let checkSunglasses = checkAvailability("sunglasses", "Favorite Supply Co.");
let checkPants = checkAvailability("pants", "Favorite Supply Co.");
let checkBags = checkAvailability("bags", "Favorite Supply Co.");

Promise.all([checkSunglasses, checkPants, checkBags])

  .then(onFulfill)
  .catch(onReject);
 */

/* console.log("First message!");
setTimeout(() => {
  console.log("This message will always run last...");
}, 2500);
console.log("Second message!"); */

/* function withConstructor(num) {
  return new Promise((resolve, reject) => {
    if (num === 0) {
      resolve("zero");
    } else {
      resolve("not zero");
    }
  });
}

withConstructor(0).then((resolveValue) => {
  console.log(
    ` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`
  );
});

// Write your code below:
async function withAsync(num) {
  // Function body here
  if (num === 0) {
    return "zero";
  } else {
    return "not zero";
  }
}

// Leave this commented out until step 3:

withAsync(100).then((resolveValue) => {
  console.log(
    ` withAsync(100) returned a promise which resolved to: ${resolveValue}.`
  );
});
 */

/* const brainstormDinner = require("./library.js");

// Native promise version:
function nativePromiseDinner() {
  brainstormDinner().then((meal) => {
    console.log(`I'm going to make ${meal} for dinner.`);
  });
}

// async/await version:
async function announceDinner() {
  // Write your code below:
  let meal = await brainstormDinner();
  console.log(`I'm going to make ${meal} for dinner.`);
}

announceDinner();
nativePromiseDinner();
 */

/* const shopForBeans = require("./library.js");

function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  let value = shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getBeans();
 */

/* let myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Yay, I resolved!");
    }, 1000);
  });
};

async function noAwait() {
  let value = myPromise();
  console.log(value);
}

async function yesAwait() {
  let value = await myPromise();
  console.log(value);
}

noAwait(); // Prints: Promise { <pending> }
yesAwait(); // Prints: Yay, I resolved!
 */

/* import shopForBeans from "./library.js";

async function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  let value = await shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getBeans();
 */

/* const { shopForBeans, soakTheBeans, cookTheBeans } = require("./library.js");

// Write your code below:
async function makeBeans() {
  const type = await shopForBeans();
  let isSoft = await soakTheBeans(type);
  let dinner = await cookTheBeans(isSoft);
  console.log(dinner);
}
makeBeans();
 */

/* function _keys(obj) {
  if (!isObject(obj)) return [];
  if (Object.keys) return Object.keys(obj);
  var keys = [];
  for (var key in obj) if (_.has(obj, key)) keys.push(key);
  return keys;
}
function isObject(obj) {
  var type = typeof obj;
  return type === "function" || (type === "object" && !!obj);
}
console.log(_keys({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }));
 */

/* const cookBeanSouffle = require("./library.js");

// Write your code below:

async function hostDinnerParty() {
  try {
    let dinner = await cookBeanSouffle();
    console.log(`${dinner} is served!`);
  } catch (error) {
    console.log(error);
    console.log("Ordering a pizza!");
  }
}

hostDinnerParty(); */

/* let {
  cookBeans,
  steamBroccoli,
  cookRice,
  bakeChicken
} = require("./library.js");

// Write your code below:

async function serveDinner() {
  const vegetablePromise = steamBroccoli();
  const starchPromise = cookRice();
  const proteinPromise = bakeChicken();
  const sidePromise = cookBeans();
  console.log(
    `Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`
  );
}

serveDinner();
 */

/* console.log("First message!");
setTimeout(() => {
  console.log("This message will always run last...");
}, 2500);
console.log("Second message!");
 */

/* console.log("First message!");
setTimeout(() => {
  console.log("This message will always run last...");
}, 0);
console.log("Second message!");
 */

/* const xhr = new XMLHttpRequest();
const url = "https://api-to-call.com/endpoint";
xhr.responseType = "json";
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response;
  }
};

xhr.open("GET", url);
xhr.send(); */

/* const xhr = new XMLHttpRequest();
const url = "https://api-to-call.com/endpoint";
const data = JSON.stringify({ id: "200" });

xhr.responseType = "json";

xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response;
  }
};

xhr.open("POST", url);
xhr.send(data); */

/* fetch("https://api-to-call.com/endpoint")
  .then(
    (response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Request failed!");
    },
    (networkError) => {
      console.log(networkError.message);
    }
  )
  .then((jsonResponse) => {
    return jsonResponse;
  }); */

/* function validatePalin(str) {  
  
    // get the total length of the words  
    const len = string.length;  
  
    // Use for loop to divide the words into 2 half  
    for (let i = 0; i < len / 2; i++) {  
  
        // validate the first and last characters are same  
        if (string[i] !== string[len - 1 - i]) {  
            alert( 'It is not a palindrome');  
        }  
    }  
    alert( 'It is a palindrome');  
}  
  
const string = prompt('Enter a string or number: ');  
  
const value = validatePalin(string);  
  
console.log(value);  
 */

// Information to reach API
const url = "https://api.datamuse.com/words";
const queryParams = "?sl=";

// Selects page elements
const inputField = document.querySelector("#input");
const submit = document.querySelector("#submit");
const responseField = document.querySelector("#responseField");

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;

  fetch(endpoint, { cache: "no-cache" }).then(
    (response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Request failed!");
    },
    (networkError) => {
      console.log(networkError.message);
    }
  );
};

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener("click", displaySuggestions);
