const wordpicker = function () {
    let list = ["sinaasappel"];
    let index = Math.floor(Math.random() * list.length);
    const x = list;
    return x[index];
};

test("should output a word", () => {

    expect(wordpicker()).toBe("sinaasappel");
})