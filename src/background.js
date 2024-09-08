chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getVideoSources") {
      chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {action: "getVideoSources"}, (response) => {
          sendResponse(response);
        });
      });
      return true;
    }
  });