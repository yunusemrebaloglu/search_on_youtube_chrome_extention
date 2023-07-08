// Sağ tıklama menüsü oluşturma
chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: "search_on_youtube",
    title: "Seçilimetin'i '%s' için Youtube'da ara",
    contexts: ["selection"]
  });
});
// Sağ tıklama menüsüne tıklandığında çalışacak işlev
chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "search_on_youtube") {
    // Seçili metni al
    var selectedText = info.selectionText;

    // Arama URL'sini oluştur
    var searchURL = "https://www.youtube.com/results?search_query=" + encodeURIComponent(selectedText);

    // Yeni sekme aç ve URL'yi yükle
    chrome.tabs.create({ url: searchURL });
  }
});
