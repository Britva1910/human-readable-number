module.exports = function toReadable(number) {
    let arr = number.toString().split('').map(Number)

    let ones = ["", 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', "ten ", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let tens = ["", "", 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];
    let hundreds = ["", 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine '];

    if (arr.length > 2) {
        let one = ones[arr[2]];
        let ten = tens[arr[1]];
        let hundred = hundreds[arr[0]];
        return `${hundred}hundred ${ten}${one}`
    } else if (arr.length === 1) {
        let one = ones[arr[1]];
        let ten = tens[arr[0]];
        return `${ten}${one}`;
    } else {
        let one = ones[arr[1]];
        return `${one}`;
    }

}