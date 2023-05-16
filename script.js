function decodeMorse(code) {
  var words = code.trim().split('   '); // Split Morse code into words
  var decodedMessage = '';

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var characters = word.split(' '); // Split word into Morse code characters

    for (var j = 0; j < characters.length; j++) {
      var character = characters[j];
      if (character in MORSE_CODE) {
        decodedMessage += MORSE_CODE[character]; // Look up character in Morse code table
      }
    }

    if (i < words.length - 1) {
      decodedMessage += ' '; // Add space between words
    }
  }

  return decodedMessage;
}
