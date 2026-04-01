# Research Task

## Define unshift(), shift() and split()

`shift()` is an inbuilt array method that removes the **first element** of an array which reduces the length property of the array by one.

If the array is empty, `shift()` method will return as `undefined`. 

`unshift()` method is used to add a minimum of one or more elements to the **beginning** of an array. 

The array `unshift()` method increases the length of the existing array by the number of elements added to the array, also it overrides the original array.

`split()` method divides a string into an array of substrings and returns a new array.
`split()` method does **not** change the original string.

There are 2 parameters in the `split()` method which are both **optional**:

 1. ***Seperator*** - The pattern describing where each split should occur. It can be `undefined`, a string or a regular expression to use for splitting. 
 - If omitted, an array with the original string is returned.
 - When omitting sepearator or passing `underfined` causes `split()` to return one single array element.
 - If seperator uses an empty ("") then the characters of the string return seperated.

 2. ***Limit*** -  An interger that limits the number of splits for the given string.
 - The string plit at each occurence of the specified seperator and stops when limit entries have been placed in the array.
 - Leftover text is not included in the array.

We can use single quotes **('')** or double quotes **("")**

## Object Methods

Methods are **functions** that stores as an object's property values.
Methods are also **actions** that can be performed on objects.

Often, a method uses `this` referring to the object that owns the method.
This helps the method access other properties of the same object.

## `onmouseover` event

The `onmouseover` event commonly used event handler in both HTML and JavaScript (JS).
Usually triggered when the mouse pointer **hovers** over a specific element e.g. *button*, *image* or *text*.
Used to create **interactive** and **dynamic** user interfaces.
Using JS you can call `onmouseover` event using an Attribute and using Event Listener.
Often, onmouserover is paired with the element onmouseout which what happens when the mouse pointer leaves the element.

## `onmouserover` event using JS:

### Attribute version

```javascript
object.onmouseover = function(){yourScript};
```

### Event Listener version

```javascript
object.addEventListener("mouseover", yourScript);
```

## `onmouseover` using HTML

```HTML
<div onmouseover="yourScript"></div>
```

## `onload` event

The `onload` event is a window event attribute which activates when a user enters a page.

`onload` event is paired with the `onunload` event which is triggered when a user leaves the page.

The attribute is commonly used in the `<body>` tag to execute the script.

`onload` event is widely used to check:
- A visitor's browser type and version to load the correct version based on the infomation.
- It can be used to deal with cookies.

syntax of `onload`:

```HTML
<body onload="load()">
```

```javascript
window.addEventListener("load", function() {
    console.log("page is fully loaded");
});

```

## `onkeydown` event 

`keydown` (or keyboard events overall) events occur when a user interacts with the keyboard.
`keydown` is triggered when a user first presses the key.

*Side note - if you were to use `keydown` event using HTML the attribute name would be `onkeydown`.*

Example of `keydown`:

In this example of this `keydown` event when the key *enter* is pressed the background colour changes to *pink*.

```javascript
document.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
      document.getElementById("event").style.backgroundColor = "pink";  
    }
});

```