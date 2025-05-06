# [vid 31] Introduction to DOM Manipulation

- **DOM and events** are the two key areas to focus on learning well.

## What is DOM?

- DOM stands for **Document Object Model**.
- It represents how your document is structured and how the page looks.

## Exploring the Window and Document Objects

- Typing `console.log()` and inspecting the output reveals a complex **window object**.
- The window object contains many things, including location, Wikipedia tracking information, and the **document object**.
- The **document object** is a key part of the window that we need to study more.
- You can access the document using `window.document`, but since it's so common, you can directly access it by typing `document` in the console.
- `console.log(document)` shows details like `DOCTYPE html`, `head`, and `body`.
- The `window` object itself contains many properties beyond the basic document, but `console.log(document)` typically shows the most relevant parts.
- To see more information about an object in the console, you can use `console.dir()` instead of `console.log()`.
- The document object is based on the DOM model.

## Visualizing the DOM Structure

![alt text](image-4.png)

![alt text](image-5.png)

- The `title` element contains a **text node**.
- A **node** is the term used in the Document Object Model for every part of the document (head, body, title, text, etc.).
- Elements like `meta` might have **attributes** but no text nodes.
- Attributes are properties associated with an element.
- These elements can have **attributes** (like `class` or `title`) and **child elements** or **text nodes**.
- Understanding this diagram is important, including concepts of **children**, **siblings**, and how to **reach** specific elements.

## Accessing Document Information

- The `document` object has many properties and methods.
- You can access properties like `document.baseURI` to get the base URL of the page.

```javascript
document.baseURI;
```

- You can get a collection of all links on the page using `document.links`.
- `document.links` returns an **HTML Collection**, which is **not an array**.
- This is a common mistake; HTML Collections and Node Collections are different from Arrays.
- They can be converted to arrays, but by default, they don't have array methods like `map` or `forEach`.
- However, some properties similar to arrays are available, like accessing elements by index (e.g., `document.links[1]` for the second link).

## Selecting Elements

- One method is `document.getElementById()`.

## Manipulating Elements (Basic Example)

- For example, to change the content of the selected `h1` element:

```javascript
const heading = document.getElementById('firstHeading');
heading.innerHTML = '<h1>Chai aur Code</h1>';
```

Here are detailed markdown notes from the entire video transcript:

## [vid 32] Introduction

- Welcome to the video on DOM selectors, NodeList, and HTMLCollection.

## Setting up the HTML

.className(not .class)
![alt text](<Screenshot (182).png>)

.getAttribute('class'), setAttribute('key','value')
> .setAttribute() overwrites so be careful to include all values

![alt text](<Screenshot (183).png>)
![alt text](<Screenshot (184).png>)

store element in variable
![alt text](<Screenshot (185).png>)

use element's variable names to access properties like style & it's key-value pairs
![alt text](<Screenshot (186).png>)

- The basic HTML structure includes:
  - `DOCTYPE html`
  - `html`
  - `head` (with `title: DOM Learning`)
  - `body`
- Inside the `body`, a `div` with class `bg-black` was initially used, but the class was later moved to the `body` tag for full page styling.
- Inside the `div` (or initially the body), there is:
  - An `h1` tag with class `heading` and title `Learning DOM`, containing the text "DOM Learning on Chai aur Code".
  - A `p` tag with lorem ipsum text.
- An `id` attribute `title` is added to the `h1` tag.
- Basic dark background and text color styling is added using an inline `<style>` tag targeting the `bg-black` class.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Learning</title>
    <style>
        .bg-black{
            background-color: #212121;
            color: #fff;
        }
    </style>
</head>
<body class="bg-black">
    <div class="bg-black">
        <h1 id="title" class="heading" title="Learning DOM">DOM Learning on Chai aur Code</h1>
        <p>lorem ipsum dolor sit amet</p>
    </div>
</body>
</html>
```

- Later, more elements are added for demonstration:
  - Multiple `h2` tags with lorem ipsum text.
  - An `input` field with type `password`.
  - An unordered list (`ul`) with list items (`li`).
  - Classes (`list-item`) are added to the list items.

```html
<body>
    <div class="bg-black">
        <h1 id="title" class="heading" title="Learning DOM">DOM Learning on Chai aur Code</h1>
        <p>lorem ipsum dolor sit amet</p>
        <h2>h2 text 1</h2>
        <h2>h2 text 2</h2>
        <h2>h2 text 3</h2>
        <input type="password">
        <ul>
            <li class="list-item">one</li>
            <li class="list-item">two</li>
            <li class="list-item">three</li>
            <li class="list-item">four</li>
        </ul>
    </div>
</body>
```

## Accessing and Modifying Content

- There are multiple ways to access the content inside an element.
- `textContent`: Returns all text content inside the element, including text from hidden elements (like those with `display: none`) and script/style tags, but ignores HTML tags.

![alt text](image-6.png)

```javascript
title.textContent; // Returns "DOM Learning on Chai aur Code" (even if part is hidden)
```

- `innerText`: Returns only the text content that is **visible** on the page, respecting CSS styling (like `display: none`). It ignores HTML tags.

```javascript
title.innerText; // Returns "DOM Learning on Chai aur Code" (only if visible)
```

- `innerHTML`: Returns all content inside the element, including **HTML tags**.

```javascript
title.innerHTML; // Returns "DOM Learning on Chai aur Code<span>test text</span>" if a span was added inside
```

- **Difference:** `innerText` cares about visibility, `textContent` does not, and `innerHTML` includes HTML structure.
- You can also **set** the content using these properties.

```javascript
title.innerHTML = '<h1>Chai aur Code</h1>'; // Replaces content with new HTML
title.textContent = 'New Text Content'; // Replaces content with plain text
title.innerText = 'Visible Text'; // Replaces visible text content
```

- Setting `innerHTML` allows you to inject HTML structure.

## More Selection Methods

- Besides `getElementById`, other selection methods exist:
  - `getElementsByClassName()`: Selects elements by class name.
  - `getElementsByTagName()`: Selects elements by tag name (e.g., 'p', 'div').
  - `getElementsByName()`: Selects elements by the `name` attribute (common for form elements).
- These "Elements" methods (plural) **do not return a single element**; they return a collection of elements.

## Advanced Selection: `querySelector` and `querySelectorAll`

- These methods allow using standard **CSS selectors** to select elements.
- This is often preferred as it aligns with existing CSS knowledge.
- `document.querySelector()`: Returns the **first element** in the document that matches the specified CSS selector.

```javascript
document.querySelector('h1'); // Selects the first h1 element
document.querySelector('#title'); // Selects the element with id 'title'
document.querySelector('.heading'); // Selects the first element with class 'heading'
document.querySelector('input[type="password"]'); // Selects the input with type="password"
document.querySelector('ul li'); // Selects the first li inside a ul
document.querySelector('ul li:first-child'); // Selects the first li inside a ul
```

- `document.querySelectorAll()`: Returns a **NodeList** containing all elements in the document that match the specified CSS selector.

```javascript
document.querySelectorAll('h2'); // Selects all h2 elements
document.querySelectorAll('li'); // Selects all li elements
document.querySelectorAll('.list-item'); // Selects all elements with class 'list-item'
document.querySelectorAll('.mw-headline'); // Selects elements on Wikipedia with class 'mw-headline'
```

- You can also use `querySelector` or `querySelectorAll` on an existing element to search within its descendants.

```javascript
const ul = document.querySelector('ul'); // Select the ul first
const firstLi = ul.querySelector('li'); // Select the first li within that specific ul
```

## Understanding Collections: NodeList vs. HTMLCollection

- **Important Concept:** The return types of selection methods are not always standard Arrays.
- **`HTMLCollection`**: Returned by methods like `getElementsByClassName()` and `document.links`.
  - It is **not an Array**.
  - It is a **live collection**, meaning it updates automatically when the underlying document changes [source does not explicitly state 'live', but this is a key difference, adding outside info for clarity].
  - It does **not** have standard Array methods like `forEach`, `map`, `filter`, etc..
  - You can access elements by index (`collection`) or `item()` method.
  - You can get its length (`collection.length`).
- **`NodeList`**: Returned by methods like `querySelectorAll()`.
  - It is **not an Array**.
  - It is typically a **static collection** (does not update automatically, adding outside info for clarity), except for `childNodes` which is live [source does not explicitly state 'static', adding outside info for clarity].
  - It **does have** the `forEach` method available.
  - It does **not** have other standard Array methods like `map`, `filter`, `reduce` by default.
  - You can access elements by index (`nodeList`) or `item()` method.
  - You can get its length (`nodeList.length`) [source implies this but doesn't explicitly state it].

## Iterating and Manipulating Collections

- You **cannot** directly apply methods like `.style` to an entire `HTMLCollection` or `NodeList` as if it were a single element.

```javascript
// This will NOT work as expected on the collection/NodeList itself
const allH2 = document.querySelectorAll('h2'); // Returns NodeList
allH2.style.color = 'green'; // Error or no effect
```

- You must **iterate** through the collection to apply changes to individual elements.
- For `NodeList`, you can use the `forEach` method.

```javascript
const allH2 = document.querySelectorAll('h2');
allH2.forEach(function(h) { // Or use arrow function: (h) => { ... }
    h.style.color = 'green'; // Apply style to each individual h2 element
    h.style.backgroundColor = 'orange'; // Apply background color to each individual h2
    h.innerText = 'Updated H2'; // Change text content of each h2
});
```

- For `HTMLCollection`, since `forEach` is not available, you typically use a standard `for` loop [source implies this by showing the lack of `forEach` and then conversion, adding outside info for clarity].

```javascript
const listItemsHTML = document.getElementsByClassName('list-item'); // Returns HTMLCollection

// Using a standard for loop (example - not explicitly shown looping this way in source)
// for (let i = 0; i < listItemsHTML.length; i++) {
//     listItemsHTML[i].style.color = 'blue';
// }
```

- **Converting to Array:** If you need full Array functionality (like `map`, `filter`), you can convert an `HTMLCollection` or `NodeList` to a standard Array using `Array.from()`.

```javascript
const listItemsHTML = document.getElementsByClassName('list-item');
const listItemsArray = Array.from(listItemsHTML); // Converts HTMLCollection to Array

listItemsArray.forEach(function(li) { // Now forEach is available
    li.style.color = 'orange';
});

// You can also use other Array methods now
// listItemsArray.map(...)
// listItemsArray.filter(...)
```

- While `forEach` is available on NodeList, converting to an Array using `Array.from()` is still an option if you need other Array methods like `map`.

## Practice on a Real Website (Wikipedia Example)

- The concepts learned can be applied to any web page.
- Practicing on sites like Wikipedia is useful due to their structured HTML.
- Using the browser's developer console, elements can be inspected to find their tags, classes, and IDs.
- `document.querySelectorAll()` was used to select all `h2` elements on a Wikipedia page.

```javascript
document.querySelectorAll('h2'); // Returns a NodeList of all h2s
```

- This NodeList was stored in a variable.

```javascript
const allH2 = document.querySelectorAll('h2');
```

- The `forEach` loop was then used on the NodeList to iterate through each `h2` element.
- Inside the loop, styles were applied to each individual element.

```javascript
allH2.forEach(function(h) { // h represents each h2 element in the NodeList
    h.style.color = 'red'; // Change color of each h2
    h.style.backgroundColor = 'black'; // Change background color of each h2
});
```

- This demonstrated applying manipulation to multiple elements selected via `querySelectorAll`.

## Conclusion and Next Steps

- The video covered selecting individual elements (`getElementById`, `querySelector`) and multiple elements (`getElementsByClassName`, `querySelectorAll`).
- It explained the different return types (`HTMLCollection`, `NodeList`) and how to iterate through them (especially using `forEach` for NodeList) or convert them to Arrays (`Array.from`).
- It showed how to access and manipulate properties, attributes, styles, and content of selected elements.
- All the work done in the console can eventually be written in script tags or separate JavaScript files to affect the page dynamically.
- The next steps involve creating new elements and integrating data (e.g., from a database) to update the DOM.
- The process of selecting elements, looping through data, and updating existing or new DOM elements is fundamental for building interactive web pages.
- Step-by-step learning makes the process easier and more enjoyable.
