# Extend.js

Collection of Javascript extensions &amp; polyfills

## Polufill.io

To polyfill browser features you can either add own tests or use service like https://github.com/jonathantneal/polyfill. Just add

```html
<script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
```

## requestAnimationFrame

Submodule: https://github.com/darius/requestAnimationFrame

*__Note__: Make sure to clone/update with submodules support.*

```
$ git clone --recursive git://github.com/foo/bar.git
$ git submodule update --init --recursive
```

## String

Extends `String` native object with these methods:

- _boolean_ `String.isValidEmail()` - checks if string is a valid email

## Array

Extends `Array` native object with these methods:

- _array_ `Array.unique()` - Returns new array with unique items
- _int_ `Array.indexOfObject((object) opts)` - Returns index of item in array of objects that matches `opts` object argument or `-1` if no object matches

## Object

Extends `Object` native object with these methods:

- _string_ `Object.buildQueryString()` - Returns URL-encoded query string

## Element

Extends native DOM `Element` object with these methods:

- _Element_ `Element.addClass(c)` - Applies classes on DOM Element
- _Element_ `Element.removeClass(c)` - Removes classes from the DOM Element
- _Element_ `Element.setClass(c)` - Sets DOM element with the new classes string
- _Element_ `Element.addEventListeners(s, fn)` - Attaches multiple events on DOM Element

*__Dependencies:__*

- `requestAnimationFrame` - Applies styles when the browser is ready to paint for better performance
- `Array.unique()` - Makes sure each class is applied just once

## HTMLCollection

Extends native `HTMLCollection` object with these methods:

- _HTMLCollection_ `HTMLCollection.addEventListener(e, fn)` - Attaches event listener to collection of Elements
- _HTMLCollection_ `HTMLCollection.addEventListeners(s, fn)` - Attaches multiple events listener to collection of Elements

*__Dependencies:__*

- `Element.addEventListeners(s, fn)`
