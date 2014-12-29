chrome.downloads.onCreated.addListener(function(downloadItem) {
	if(downloadItem.mime === 'text/html') {
		chrome.downloads.cancel(downloadItem.id);
		console.log('Prevented download of ' + downloadItem.url);
	}
});
