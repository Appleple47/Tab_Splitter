document.getElementById('split').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      const currentUrl = tabs[0].url;
      const screenWidth = screen.availWidth;
      const screenHeight = screen.availHeight;
  
      chrome.windows.create({
        url: currentUrl,
        left: 0,
        top: 0,
        width: Math.floor(screenWidth / 2),
        height: screenHeight,
        type: "normal"
      });
  
      const currentIndex = tabs.findIndex(tab => tab.active);
      const rightTab = tabs[currentIndex + 1];
      const rightUrl = rightTab ? rightTab: "https://www.google.com";
  
      chrome.windows.create({
        url: rightUrl,
        left: Math.floor(screenWidth / 2),
        top: 0,
        width: Math.floor(screenWidth / 2),
        height: screenHeight,
        type: "normal"
      });
    });
  });