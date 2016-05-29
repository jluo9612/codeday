chrome.browserAction.onClicked.addListener(function(activeTab)
{
    var newURL = “index.html”;
    chrome.tabs.create({ url: newURL });
});

<script src="https://cdn.firebase.com/js/client/2.4.2/firebase.js"></script>