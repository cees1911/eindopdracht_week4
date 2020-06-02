const letterGuessed = () => {
    const word = ["vis"];
    const letter = "i";
    if (!word.includes(letter)) {
        //document.querySelector(".guessed_letters").innerHTML = wrongLetters.join(" ");
        return false
    }
    if (word.includes(letter)) {
        //document.querySelector(".the_word").innerHTML = display.join(" ");
        return true
    }
}

test("zit de letter in het woord", () => {
    expect(letterGuessed().toBeTruthy)
})