document.getElementById('split').addEventListener('click', () => {
    chrome.tabs.query({currentWindow: true}, (tabs) => {
      const screenWidth = screen.availWidth;
      const screenHeight = screen.availHeight;

      const currentIndex = tabs.findIndex(tab => tab.active);
      if (currentIndex < 0) return;  
      const currentUrl = tabs[currentIndex].url;

      const rightUrl = tabs[currentIndex + 1]?.url || 'https://www.google.com';


      chrome.windows.create({
        url: currentUrl,
        left: 0,
        top: 0,
        width: Math.floor(screenWidth / 2),
        height: screenHeight,
        type: "normal"
      });

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