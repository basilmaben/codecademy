/* const brainstormDinner = () => {
  return new Promise((resolve, reject) => {
    console.log(`I have to decide what's for dinner...`);
    setTimeout(() => {
      console.log("Should I make salad...?");
      setTimeout(() => {
        console.log("Should I make ramen...?");
        setTimeout(() => {
          console.log("Should I make eggs...?");
          setTimeout(() => {
            console.log("Should I make chicken...?");
            resolve("beans");
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  });
};

module.exports = brainstormDinner; */

/* const shopForBeans = () => {
  return new Promise((resolve, reject) => {
    const beanTypes = ["kidney", "fava", "pinto", "black", "garbanzo"];
    setTimeout(() => {
      let randomIndex = Math.floor(Math.random() * 4);
      let beanType = beanTypes[randomIndex];
      console.log(`2. I bought ${beanType} beans because they were on sale.`);
      resolve(beanType);
    }, 1000);
  });
};

module.exports = shopForBeans; */

const shopForBeans = () => {
  return new Promise((resolve, reject) => {
    const beanTypes = ["kidney", "fava", "pinto", "black", "garbanzo"];
    setTimeout(() => {
      let randomIndex = Math.floor(Math.random() * 5);
      let beanType = beanTypes[randomIndex];
      console.log(`I bought ${beanType} beans because they were on sale.`);
      resolve(beanType);
    }, 1000);
  });
};

let soakTheBeans = (beanType) => {
  return new Promise((resolve, reject) => {
    console.log("Time to soak the beans.");
    setTimeout(() => {
      console.log(`... The ${beanType} beans are softened.`);
      resolve(true);
    }, 1000);
  });
};

let cookTheBeans = (isSoftened) => {
  return new Promise((resolve, reject) => {
    console.log("Time to cook the beans.");
    setTimeout(() => {
      if (isSoftened) {
        console.log("... The beans are cooked!");
        resolve("\n\nDinner is served!");
      }
    }, 1000);
  });
};

module.exports = { shopForBeans, soakTheBeans, cookTheBeans };
