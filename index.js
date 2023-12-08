export function setCookie(name,value, expireData = {
    "expireMode": "none",
    "expire"    : 1
}) {
    var expires = "";
    if (['day','hour'].includes(expireData.expireMode)) {
        var timeToAdd = 0;
        if(expireData.expireMode === 'day') {timeToAdd = (expireData.expire*24*60*60*1000)}
        if(expireData.expireMode === 'hour') {timeToAdd = (expireData.expire*60*60*1000)}
        var date = new Date();
        date.setTime(date.getTime() + (timeToAdd));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
export function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
export function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}