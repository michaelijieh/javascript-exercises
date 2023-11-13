const reverseString = function(words) {

let strings = words;
let lStrings = strings.length;
let newWord = "";

let i = lStrings;
while (i >= 0) {
    newWord += strings.charAt(i)

    i--;
}

return newWord;




};

// Do not edit below this line
module.exports = reverseString;


