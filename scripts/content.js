(() => {
  // Check if the script has already been injected
  if (window.morseCodeMapInjected) {
    return; // Exit if already injected
  }

  // Mark this page as having the script injected
  window.morseCodeMapInjected = true;

  // Morse code mapping
  const morseCodeMap = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', 
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.'
  };

  // Function to convert text to Morse code
  const textToMorse = (text) => {
    return text.toUpperCase().split('').map(char => morseCodeMap[char] || char).join(' ');
  };

  // Function to convert text content of body to Morse code
  const convertBodyTextToMorse = () => {
    const walker = document.createTreeWalker(
      document.body, 
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) => {
          const parentTag = node.parentNode.tagName.toLowerCase();
          const ignoredTags = ['script', 'style', 'nav', 'footer', 'button', 'input', 'textarea', 'select'];
          if (ignoredTags.includes(parentTag)) {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        }
      },
      false
    );

    let node;
    while (node = walker.nextNode()) {
      const morseCode = textToMorse(node.nodeValue);
      node.nodeValue = morseCode;
    }
  };

  // Execute the conversion function
  convertBodyTextToMorse();
})();
