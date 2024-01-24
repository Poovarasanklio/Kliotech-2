const quotes= ["No sentence","can end with because because, because is a conjunction",
    "Since every school in India teaches English, why can't it be our link language? Why do Tamils have to study English for communication with the world and Hindi for communications within India? Do we need a big door for the big dog and a small door for the small dog? I say, let the small dog use the big door too!",
    "We will go to every part of Tamil Nadu and tell the people that Hindi is coming and that it is like a thunder strike on the heads of Tamil and Dravidian people.... If Hindi were to become the official language of India, Hindi-speaking people will govern us. We will be treated like third rate citizens",
    "India is a continent and should be divided into separate nations. There is no need for a single government."
   ];
   let words = [];
   let wordIndex = 0;
   // the starting time
   let startTime = Date.now();
   // page elements
   const quoteElement = document.getElementById('quote');
   const messageElement = document.getElementById('message');
   const typedValueElement = document.getElementById('typed-value');

   // at the end of script.js
document.getElementById('start').addEventListener('click', () => {
    // get a quote
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[quoteIndex];
    // Put the quote into an array of words
    words = quote.split(' ');
    // reset the word index for tracking
    wordIndex = 0;
  
    // UI updates
    // Create an array of span elements so we can set a class
    const spanWords = words.map(function(word) { return `<span>${word} </span>`});
    // Convert into string and set as innerHTML on quote display
    quoteElement.innerHTML = spanWords.join('');
    // Highlight the first wordf
    quoteElement.childNodes[0].className = 'highlight';
    // Clear any prior messages
    messageElement.innerText = '';
  
    // Setup the textbox
    // Clear the textbox
    typedValueElement.value = '';
    // set focus
    typedValueElement.focus();
    // set the event handler
  
    // Start the timer
    startTime = new Date().getTime();
  });
  // at the end of script.js


  
typedValueElement.addEventListener('input', () => {
    // Get the current word
    const currentWord = words[wordIndex];
    // get the current value
    const typedValue = typedValueElement.value;
  
    if (typedValue === currentWord && wordIndex === words.length - 1) {
      // end of sentence
      // Display success
      const elapsedTime = new Date().getTime() - startTime;
      const message = `Congrats! You have completed in ${elapsedTime / 60000} minute.`;
      messageElement.innerText = message;
    } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
      // end of word
      // clear the typedValueElement for the new word
      typedValueElement.value = '';
      // move to the next word
      wordIndex++;
      // reset the class name for all elements in quote
      for (const wordElement of quoteElement.childNodes) {
        wordElement.className = '';
      }
      // highlight the new word
      quoteElement.childNodes[wordIndex].className = 'highlight';
    } else if (currentWord.startsWith(typedValue)) {
      // currently correct
      // highlight the next word
      typedValueElement.className = '';
    } else {
      // error state
      typedValueElement.className = 'error';
    }
  });