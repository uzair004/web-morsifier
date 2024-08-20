document.getElementById('convertButton').addEventListener('click', () => {
    console.log('clicked..')
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    // Inject the content script into the active tab
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      files: ['scripts/content.js']
    });
  });
});
