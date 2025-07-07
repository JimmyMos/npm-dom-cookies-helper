/**
 * Set a cookie in the user browser.
 *
 * @param {string} name     - Cookie name.
 * @param {string} value    - Cookie value.
 * @param {number} expireIn - Cookie expiration in ms (by default no expire date is set).
 * @returns {void}
 */
export function setCookie(name, value, expireIn) {
    var expires = "";
    if (typeof expireIn === 'number') {
        var timeToAdd = expireIn;
        var date = new Date();
        date.setTime(date.getTime() + (timeToAdd));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

/**
 * Get a cookie value.
 *
 * @param {string} name - Cookie name.
 * @returns {string} Cookie value.
 */
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

/**
 * Erase a cookie.
 *
 * @param {string} name - Cookie name.
 * @returns {void}
 */
export function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}