module.exports = function toReadable(number) {
    const ones = ['', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundreds = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine '];
    let str = number.toString();
    if (number === 0) {
        return 'zero'
    }
    return convertHundred(number).trim();

    function convertHundred(number) {
        if (number > 99) {
            let hundred = Math.floor(number / 100);
            str = (number % 100).toString();
            return `${hundreds[hundred]}hundred${convertTens(number%100)}`
        } else {
            return convertTens(number);
        }
    };

    function convertTens(number) {
        if (number < 20) {
            return `${ones[number]}`;
        } else {
            return ` ${tens[str[0]]}${ones[str[1]]}`;
        }
    };
}
