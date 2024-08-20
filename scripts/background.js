chrome.action.onClicked.addListener((tab) => {
  // This will inject the content.js script when the icon is clicked
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content.js']
  });
});
