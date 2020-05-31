function beginTheGameWithPlayer() {
    const wordList = ["vis"];

    const word = wordList.toString().split("");
    return word;
}

test("wordlist has to be splitted", () => {
    expect(beginTheGameWithPlayer()).toEqual(["v", "i", "s"])
})