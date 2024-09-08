document.addEventListener('DOMContentLoaded', () => {
    chrome.runtime.sendMessage({action: "getVideoSources"}, (response) => {
      const sourcesDiv = document.getElementById('sources');
      if (response && response.sources && response.sources.length > 0) {
        const ul = document.createElement('ul');
        response.sources.forEach(source => {
          const li = document.createElement('li');
          li.textContent = source;
          ul.appendChild(li);
        });
        sourcesDiv.appendChild(ul);
      } else {
        sourcesDiv.textContent = "No video sources found on this page.";
      }
    });
  });