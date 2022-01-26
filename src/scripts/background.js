// eslint-disable-next-line import/no-unassigned-import
// eslint-disable-next-line import/no-unassigned-import
// import '../options-storage.js';


chrome.browserAction.onClicked.addListener(function (tab) {
    console.log('click me')

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "toggle_box" }, function (response) { });
    });
});

// chrome.runtime.onMessage.addListener(function (msg, sender) {
//     console.log(msg)
//     chrome.downloads.download({
//         url: msg.url
//     });
// });