const wordGuessed = function () {
    // remove all letters from word that are already guessed
    // We can do this with a for loop to.
    const word = ["g", "e", "e", "u", "w"];
    const inputs = ["g", "b", "e", "i", "u", "w"];
    const inputs2 = ["g", "b", "e", "i", "u"];
    const remaining = word.every(i => inputs.includes(i));
    console.log(remaining);
    const remaining2 = word.every(i => inputs.includes(i));
    console.log(remaining2)
    if (remaining == true && remaining2 == false) {
        true
    };
    // If the letter is guessed return true (we want to remove that right away)
};

test("is het woord geraden", () => {
    expect(wordGuessed.toBeTruthy)
})