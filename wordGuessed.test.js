const word = ["vis"];
const inputs = "s";

const wordGuessed = function (word, inputs) {
  
    // remove all letters from word that are already guessed
  // We can do this with a for loop to.
  let remaining = word.filter(function (inputs) {
    // If the letter is guessed return true (we want to remove that right away)
   console.log (inputs);
    return !inputs.includes(inputs);


  });
  console.log("remaining", remaining);
  // If we have letters left, right?
  return remaining.length === 0;
};

 /*heeft input nodig uit 1: word, 2: input */

 //const wordGuessed = require("./script.js");

test("test of het woord al geraden is", () => {
   
   expect(inputs).toBe("s");
});