function calcWordFrequencies() {
    const words = prompt("Please enter a list of words, separated by spaces:");
    const wordList = words.split(" ");
  
    // create a map to store the frequencies of each word
    const frequencies = new Map();
  
    // loop through each word in the list
    for (const word of wordList) {
      // if the word is already in the map, increment its frequency
      if (frequencies.has(word)) {
        frequencies.set(word, frequencies.get(word) + 1);
      } 
      // if the word is not in the map, add it with a frequency of 1
      else {
        frequencies.set(word, 1);
      }
    }
  
    // loop through the map and print each word and its frequency to the console
    frequencies.forEach((frequency, word) => {
      console.log(`${word} ${frequency}`);
    });
  }
  