# @jimmymos/dom-cookies-helper

> A tiny utility to easily set, get, and erase cookies in the browser using JavaScript.

> 🛑 Heads up! Versions below `v1.1.0` are deprecated.  
> Please upgrade to `^1.1.0` or higher for a stable and supported release.

## 🚀 Installation

```bash
npm install @jimmymos/dom-cookies-helper
```

## 📦 Usage

Import the helper functions:

```js
import { getCookie, setCookie, eraseCookie } from "@jimmymos/dom-cookies-helper"
```

## 🍪 API

### getCookie(name)

Retrieves the value of a cookie by name.

```js
getCookie('cookieName');
```

### setCookie(data)

Sets a cookie with the given name and value.

- data.expiresInMs (optional): Duration in milliseconds before the cookie expires.
- If not provided, the cookie becomes a session cookie (deleted when the browser is closed).

```js
// Set a cookie that expires in 1 year
setCookie({
    name: 'cookieName',
    value: 'cookieValue',
    expiresInMs: 1000 * 60 * 60 * 24 * 365
});
```

### eraseCookie(name)

Deletes a cookie by name.

```js
eraseCookie('cookieName');
```

## 📝 Notes

- This utility only works in the browser (not Node.js).
- Cookies are stored under the current domain and path.