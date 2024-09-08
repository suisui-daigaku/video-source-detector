function getVideoSources() {
    const videoElements = document.getElementsByTagName('video');
    const sources = [];
  
    for (let video of videoElements) {
      // if there are <source> tags in the video tag. 
      const sourceElements = video.getElementsByTagName('source');
      for (let source of sourceElements) {
        sources.push(source.src);
      }
      // for those video tag like <video src="">. 
      if (video.src) {
        sources.push(video.src);
      }
    }
  
    return sources;
  }
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getVideoSources") {
      sendResponse({sources: getVideoSources()});
    }
  });