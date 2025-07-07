/**
 * Set a cookie in the user browser.
 *
 * @param {object} data               - Cookies data.
 * @param {string} data.name          - Cookie name.
 * @param {string} data.value         - Cookie value.
 * @param {number} [data.expiresInMs] - Optional expiration time in milliseconds. By default the cookie live in the session.
 * @returns {void}
 */
export function setCookie(data) {
    var expires = "";
    if (typeof data.expiresInMs === 'number') {
        var timeToAdd = expiresInMs;
        var date = new Date();
        date.setTime(date.getTime() + (timeToAdd));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = data.name + "=" + (data.value || "")  + expires + "; path=/";
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