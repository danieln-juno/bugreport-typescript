// file for extension

chrome.action.onClicked.addListener(function (tab) {
  //first click over the extension button
  chrome.desktopCapture.chooseDesktopMedia(
    ["screen", "tab"],
    tab,
    (streamId) => {
      //check whether the user canceled the request or not
      if (streamId && streamId.length) {
        setTimeout(() => {
          chrome.runtime.sendMessage(
            tab.id,
            { name: "stream", streamId },
            (response) => console.log(response)
          );
        }, 200);
      }
    }
  );
});

chrome.runtime.onMessage.addListener((message, sender, senderResponse) => {
  if (message.name === "download" && message.url) {
    chrome.downloads.download(
      {
        filename: "screenshot.png",
        url: message.url,
      },
      (downloadId) => {
        senderResponse({ success: true });
      }
    );

    return true;
  }
});
