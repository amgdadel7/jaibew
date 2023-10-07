function getOS() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;

    if (macosPlatforms.indexOf(platform) !== -1) {
        window.location.href = "https://apps.apple.com/";

    //    os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        window.location.href = "https://apps.apple.com/";
        //os = window.location.href;
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        window.location.href = "https://play.google.com/store/apps/details?id=com.ahd.jaib";
       
        //os = 'Windows';
    } else if (/Android/.test(userAgent)) {
        window.location.href = "https://play.google.com/store/apps/details?id=com.ahd.jaib";

        //os = 'Android';
    } else if (/Linux/.test(platform)) {
        window.location.href = "https://apps.apple.com/";

        //os = 'Linux';
    }

    /*return os;*/
}
function onClickButton() {
    getOS();
}
