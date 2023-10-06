const repeatString = function(string, number) {
    let word = '';
    let i = 0;

    if (number < 0) {
        return 'ERROR';
    }

    while (i < number) {
        word += string;
        i++;
    }
    return word;

};
repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
