var Chromever = 94.0; var FireFoxver = 93; var Mozillaver = 93; var Operaver = 80; var Safariver = 15; var IEver = 12.0; var EdgeVer = 94;
var IsOutdated = false;
var BrowserDetect = {
    init: function () {
        this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
        this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
        this.showmsg(this.browser, this.version);
    },
    showmsg: function (b, v) {
        if (b === "Explorer") { if (v === 7) { v = RegExp.$1 } if (v < IEver) { IsOutdated = true; } }
        if (b === "Chrome") { if (v < Chromever) { IsOutdated = true; } }
        if (b === "Opera") { if (v < Operaver) { IsOutdated = true; } }
        if (b === "Firefox") { if (v < FireFoxver) { IsOutdated = true; } }
        if (b === "Mozilla") { if (v < Mozillaver) { IsOutdated = true; } }
        if (b === "Safari") { if (v < Safariver) { IsOutdated = true; } }
        if (b === "Edge") { if (v < EdgeVer) { IsOutdated = true; } }
        if (b !== "Explorer" && b !== "Chrome" && b !== "Opera" && b !== "Firefox" && b !== "Mozilla" && b !== "Safari") { IsOutdated = true; }
        if (IsOutdated === true) {
            if (document.getElementById("divBrowserAlert")) { document.getElementById("divBrowserAlert").innerHTML = "<br /><b class='textred'>You are using an old version of " + b + " - " + v + ".</b><br /><b>ITS System</b> will work better for you if you upgrade or switch to latest browser. List of latest browser are as follows: <br />1. <a href='https://www.mozilla.org/en-US/firefox/new/' target='_blank'>Mozilla Ver: " + Mozillaver + "</a><br />2. <a href='https://www.google.com/chrome/' target='_blank'>Google Chrome Ver: " + Chromever + "</a><br />3. <a href='https://www.opera.com/' target='_blank'>Opera Ver: " + Operaver + " </a><br />4. <a href='https://www.microsoft.com/en-us/edge' target='_blank'>Edge Ver: " + EdgeVer + " </a><br />5. <a href='https://www.microsoft.com/windows/internet-explorer/default.aspx' target='_blank'>Internet Explorer Ver: " + IEver + " </a><br />6. <a href='https://www.apple.com/in/safari/' target='_blank'>Safari Ver: " + Safariver + "</a>" + "<br> for more details visit <a href='https://bestvpn.org/outdatedbrowser/en' target='_blank'>www.outdatedbrowser.com</a>"; return hs.htmlExpand(document.getElementById("divBrowserAlert"), { maincontentId: 'divBrowserAlert', headingText: 'Upgrade your browser.', allowWidthReduction: true, width: '600' }) }
            else { alert('Upgrade your browser.\nYou are using an old version of ' + b + ' - ' + v + '. ITS System will work better for you if you upgrade or switch to latest browser. List of latest browser are as follows:\n 1. Google Chrome Ver: ' + Chromever + '\n 2. Mozilla Ver: ' + Mozillaver + '\n 3. Opera Ver: ' + Operaver + '\n 4. Edge Ver: ' + EdgeVer + '\n 5. Internet Explorer Ver: ' + IEver + '\n 6. Safari Ver: ' + Safariver + '\n\n for more details visit www.outdatedbrowser.com'); }
        }
    },
    searchString: function (data) { for (var i = 0; i < data.length; i++) { var dataString = data[i].string; var dataProp = data[i].prop; this.versionSearchString = data[i].versionSearch || data[i].identity; if (dataString) { if (dataString.indexOf(data[i].subString) !== -1) return data[i].identity; } else if (dataProp) return data[i].identity; } },
    searchVersion: function (dataString) { var index = dataString.indexOf(this.versionSearchString); if (index === -1) return; return parseFloat(dataString.substring(index + this.versionSearchString.length + 1)); },
    dataBrowser: [
        { string: navigator.userAgent, subString: "Chrome", identity: "Chrome" },
        { string: navigator.userAgent, subString: "OmniWeb", versionSearch: "OmniWeb/", identity: "OmniWeb" },
        { string: navigator.vendor, subString: "Apple", identity: "Safari", versionSearch: "Version" },
        { prop: window.opera, identity: "Opera" },
        { string: navigator.vendor, subString: "iCab", identity: "iCab" },
        { string: navigator.vendor, subString: "KDE", identity: "Konqueror" },
        { string: navigator.userAgent, subString: "Firefox", identity: "Firefox" },
        { string: navigator.vendor, subString: "Camino", identity: "Camino" },
        { string: navigator.userAgent, subString: "Netscape", identity: "Netscape" },
        { string: navigator.userAgent, subString: "MSIE", identity: "Explorer", versionSearch: "MSIE" },
        { string: navigator.userAgent, subString: "Gecko", identity: "Mozilla", versionSearch: "rv" },
        { string: navigator.userAgent, subString: "Mozilla", identity: "Netscape", versionSearch: "Mozilla" }
    ]
};
window.onload = function () { BrowserDetect.init(); };