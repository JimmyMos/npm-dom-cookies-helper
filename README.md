# @jimmymos/dom-cookies-helper

> Allow to set, get and erase cookie easily with Javascript

```js
import { getCookie, setCookie, eraseCookie } from "@jimmymos/dom-cookies-helper"
```

## Get cookie
```js
getCookie('cookieName');
```

## Set cookie
```js
setCookie('cookieName', 'cookieValue');
// Expiration can be set by adding a 3rd parameter as the number of milliseconds
```

## Erase cookie
```js
eraseCookie('cookieName');
```