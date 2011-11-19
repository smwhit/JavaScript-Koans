cterType = typeof("Amory".charAt(1)); // typeof will be explained in about reflection
    equals(characterType, 'string', 'Javascript has no character type');
});

test("escape character", function() {
    var stringWithAnEscapedCharacter  = "\u0041pple";
    equals(stringWithAnEscapedCharacter, "apple", 'what  is the value of stringWithAnEscapedCharacter?');
});

test("string.length", function() {
    var fruit = "apple";
    equals(fruit.length, __, 'what is the value of fruit.length?');
});

test("slice", function() {
    var fruit = "apple pie";
    equals(fruit.slice(0,5), __, 'what is the value of fruit.slice(0,5)?');
});
