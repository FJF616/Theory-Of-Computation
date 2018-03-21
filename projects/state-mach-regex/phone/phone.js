var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


// This code reads a line at a time from stdin

rl.on('line', function (line) {

    // !!!! IMPLEMENT ME

    // Come up with the phone regex
let phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
if (phoneRegex.test(subjectString)) {
  const formattedPhoneNumber = subjectString.replace(phoneRegex, "($1) $2-$3"); 
} else {    // Invalid phone number }

}
    // Find matches

    // If match found, print number with no spaces, parens, or dashes

    // Else print that no number was found
});
