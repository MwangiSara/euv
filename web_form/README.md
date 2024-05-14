# web_form

<!-- ## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration -->
<!-- See [Configuration Reference](https://cli.vuejs.org/config/). -->

* creating a vue app that contains a form that incorporates vue.js funtionalities
* properties in vue.js learnt while creating this vue application:
 
### v-model 
* is a directive that simplifies two-way data binding between a form input element and a piece of data in your Vue component's state. It essentially creates a link between the value of the input element and the data property, automatically keeping them synchronized. Here's a deeper look at how v-model works:

    * Binding Input Value and Data: When you use v-model on an input element, it binds the element's value attribute to a data property in your component. This means any changes made to the input field will be reflected in the data property, and vice versa.
    * Two-Way Communication: v-model establishes a two-way communication channel. This means:
        * User Input Updates Data: When a user types or interacts with the input element, the changes are automatically reflected in the data property.
        * Data Updates Input: If you modify the data property in your component's methods or computed properties, the value of the input element will be updated to match the new data value.
    * Benefits of Using v-model:

        * Simplified Form Handling: v-model removes the need for manual DOM manipulation or event listeners for basic form interactions. It streamlines the process of working with form data in your Vue components.
        * Improved Reactivity: By automatically keeping the input and data in sync, v-model ensures that your component's UI always reflects the latest data state. This improves the overall user experience.
        * Concise Syntax: v-model offers a concise way to manage two-way data binding, making your component code cleaner and easier to read.
    ```
        <template>
  <div>
    <label for="message">Message:</label>
    <input v-model="message" id="message" type="text" />
    <p>Your message: {{ message }}</p>
  </div>
    </template>

    <script>
    export default {
    data() {
        return {
        message: '',
        }
    }
    }
    </script>
    ```

* when using v-for to render a list of items, Vue needs a way to efficiently update the DOM when the underlying data changes. This is where the v-bind:key attribute comes into play. The v-bind:key directive is used to assign a unique identifier to each item in the list. This identifier helps Vue to keep track of which elements have been added, removed, or re-ordered when the array of data changes. Without a unique identifier, Vue would have to resort to re-rendering the entire list whenever the data changes, which can be inefficient and lead to poor performance, especially for large lists.

```
<template>
  <ul>
    <li v-for="item in items" :key="item.id">{{ item.text }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, text: 'Item 1' },
        { id: 2, text: 'Item 2' },
        { id: 3, text: 'Item 3' }
      ]
    };
  }
};
</script>
```
### Keyboard events 
* Keyboard events in Vue.js allow you to detect and react to user interactions with the keyboard. This enables you to create dynamic and responsive user interfaces that respond to key presses. Here's a breakdown of how keyboard events work in Vue.js:

1. Event Listeners: You can listen for keyboard events using the @ directive (Vue 2) or v-on directive (Vue 3) along with the specific event name. Vue.js supports various keyboard events like:
    * keydown: Triggered when a key is pressed down (includes repeats if the key is held).
    * keyup: Triggered when a key is released.
    * keypress: Triggered when a character is pressed and released (may not be reliable in all browsers).
    ```
    <template>
  <input @keydown="handleKeyDown" />
    </template>

    <script>
    export default {
    methods: {
        handleKeyDown(event) {
        console.log('Key pressed:', event.key);
        // Perform actions based on the pressed key
        }
    }
    }
    </script>
    ```
2. Event Object: When a keyboard event is triggered, Vue.js provides an event object as an argument to the event handler function. This object contains properties like:
    * key: The name of the pressed key (e.g., "Enter", "ArrowUp").
    * code: The system-specific key code (e.g., "Enter" -> "Enter", "ArrowUp" -> "ArrowUp").
    * ctrlKey, shiftKey, altKey, metaKey: Boolean flags indicating if modifier keys (Ctrl, Shift, Alt, Meta) are pressed along with the key.
3. Key Modifiers: You can combine keyboard events with key modifiers like ctrl, shift, alt, or meta (or their kebab-case equivalents) to detect specific key combinations.
```
<template>
  <input @keydown.ctrl.enter="handleCtrlEnter" />
</template>

<script>
export default {
  methods: {
    handleCtrlEnter(event) {
      console.log('Ctrl + Enter pressed!');
      // Perform actions specific to Ctrl + Enter
    }
  }
}
</script>
```

###  Naming Conventions
1. Kebab-case, also sometimes called hyphen-case or dash-case, is a naming convention for using hyphens (-) to separate words in identifiers. eg background-color
2. Snake_case: Similar to kebab-case but uses underscores (_) instead of hyphens. Commonly used in Python and other programming languages.
3. CamelCase: Words are joined together with the first letter of each subsequent word capitalized (e.g., userName). Often used in JavaScript and other languages.
4. PascalCase: Similar to camelCase but the first letter of the entire identifier is also capitalized (e.g., UserName). Used in some programming languages and class names.

### splice and filter
*  both splice and filter are methods used to manipulate arrays, but they serve different purposes and have distinct effects on the original data:

1. splice: Modifies the original array by removing or replacing elements and/or adding new elements in place. syntax is
```
array.splice(start, deleteCount, item1, item2, ..., itemN)
```
```
const numbers = [1, 2, 3, 4, 5];

// Remove element at index 2 (value 3)
numbers.splice(2, 1); // numbers becomes [1, 2, 4, 5]

// Replace element at index 1 (value 2) with 10
numbers.splice(1, 1, 10); // numbers becomes [1, 10, 4, 5]

// Insert element 0 before index 2 (value 4)
numbers.splice(2, 0, 0); // numbers becomes [1, 10, 0, 4, 5]

```

2. filter: Creates a new array containing elements that pass a test implemented within the provided function. syntax 
```
array.filter(callbackFn)
```
* callbackFn (required): This is a function that determines whether each element in the array passes a test. It takes two arguments:
    * element: This is the current element being processed in the iteration.
    * index (optional): This is the index of the current element being processed (optional). You can use this if the filtering logic depends on the element's position in the array.
```
const numbers = [1, 2, 3, 4, 5];

// Create a new array with only even numbers
const evenNumbers = numbers.filter(number => number % 2 === 0); // evenNumbers becomes [2, 4]

```

### The ternary conditional operator 
* also sometimes called a ternary if or inline if, is a shorthand way of writing an if-else statement in JavaScript (and consequently in Vue.js). It provides a concise way to express a condition and assign a value based on whether the condition is true or false.
```
condition ? expression_if_true : expression_if_false
```
```
<template>
  <p>You are {{ isLoggedIn ? 'logged in' : 'not logged in' }}</p>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: true, // Replace with actual login state
    }
  }
}
</script>

```
* Benefits:

    * Conciseness: The ternary operator can make code more readable and compact compared to a full if-else statement, especially for simple conditions.
    * Readability: When used appropriately, it can enhance code clarity by expressing the condition and its consequences in a single line.
* Cautions:

    * Complexity: For complex conditions or long expressions, it might be better to use a full if-else statement for improved readability and maintainability.
    * Nesting: Nesting ternary operators can make code difficult to understand. It's generally recommended to avoid deeply nested ternary expressions.