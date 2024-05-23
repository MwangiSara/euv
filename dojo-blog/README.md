# dojo-blog

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

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/). -->

## programmatic navigation
* allows you to navigate between routes within your application using JavaScript code instead of relying solely on user interaction with <router-link> components
* You can trigger navigation based on user actions, events, or application logic.
* You can conditionally navigate to specific routes based on certain conditions within your components. You have more control over the navigation flow of your application.
* Vue Router provides several methods for programmatic navigation:
  1. router.push(path): This method pushes a new entry onto the history stack, allowing users to navigate back using the browser's back button.
  ```
    this.$router.push('/about'); // Navigate to the about route
  ```
  2. router.replace(path): This method replaces the current history entry with the new route.
  ```
  this.$router.replace('/login'); // Replace current route with login
  ```
  3. router.go(n): This method navigates forward or backward in the history stack based on the provided integer argument n. Positive values (e.g., 1) move forward in history (similar to clicking the browser's forward button). Negative values (e.g., -1) move backward in history (similar to the back button).
  ```
    this.$router.go(1); // Navigate one step forward in history
  ```

### Json Server
* JSON Server is a lightweight Node.js module that simulates a RESTful API using a JSON file as its data source.
* Here's a basic example of how JSON Server works:
    1. Create a JSON File: You define the data structure for your API in a JSON file (e.g., db.json). This file holds the initial data for your mock API.
    2. Run JSON Server: You use the json-server command along with the path to your JSON data file to start the JSON Server.
    3. API Interaction: Your front-end code can then interact with the JSON Server using standard HTTP methods (GET, POST, PUT, DELETE) to simulate API calls. JSON Server automatically handles these requests based on the data in your JSON file.
* Here are some key characteristics of JSON Server:

    * Simplicity: It's easy to set up and use, requiring minimal configuration.
    * Flexibility: It allows you to define your API data structure using a simple JSON file.
    * CRUD Operations: It supports basic CRUD (Create, Read, Update, Delete) operations on the data stored in the JSON file.
    * Automatic Routes: Based on the structure of your JSON data, JSON Server automatically generates routes for interacting with the data.
    * Fast Development: It provides a quick way to mock an API without needing a complex backend server setup, allowing front-end developers to focus on building the user interface and application logic.
* While JSON Server is a valuable tool, it's important to consider its limitations:

    * Limited Functionality: It cannot handle complex functionalities typically found in real backend APIs.
    * Security Concerns: It's not intended for production use due to security limitations.
    * Scalability Issues: It's not suitable for large datasets or high-traffic applications.

### options API
* The Options API is the traditional way of defining Vue.js components. It involves using a JavaScript object with specific properties to encapsulate a component's behavior and structure. This object contains various properties that specify different aspects of the component's functionality.
* Key Properties:
  * data: This property defines the reactive data state of the component. Any changes to properties within the data object will trigger a re-render of the component's template.
  * template: This property defines the HTML-like template structure that represents the component's visual output. You can use Vue.js directives and expressions within the template to dynamically bind data and handle user interactions.
  * methods: This property defines methods (functions) that can be used within the component's template or logic. These methods can perform actions, manipulate data, or interact with external APIs.
  * computed: This property defines computed properties, which are derived values based on other data properties within the component. Computed properties are automatically re-evaluated whenever their dependencies change, ensuring the displayed value is always up-to-date.
  * Lifecycle Hooks (Optional): These are special functions that can be defined within the component options object to hook into specific stages of a component's lifecycle (e.g., mounted, created, updated).
```
  export default {
    data() {
      return {
        // Initial message
        message: "Hello from Vue!",
        // Counter value (reactive)
        count: 0,
      };
    },
    template: `
      <div>
        <p>{{ message }}</p>
        <button @click="incrementCount">Count: {{ count }}</button>
        <p>Doubled Count: {{ doubledCount }}</p>
      </div>
    `,
    methods: {
      incrementCount() {
        this.count++;
      },
    },
    computed: {
      doubledCount() {
        // Return the count multiplied by 2
        return this.count * 2;
      },
    },
    mounted() {
      console.log("Component is mounted!");
    },
  };
```
### options API
* The Composition API is a newer approach to defining Vue.js components introduced in Vue 3 (and partially supported as a plugin in Vue 2). It offers a more functional style of component creation compared to the traditional Options API.
* The Composition API emphasizes using functions and hooks to define component logic instead of relying on a single options object with properties like data, methods, etc.
* Instead of defining logic directly within the component, you import and compose functionality from other parts of your application using functions provided by Vue or custom functions you create.
#### Key Concepts:

- Reactivity System: Vue's core reactivity system remains the foundation for managing data and ensuring updates are reflected in the UI.
- Setup Function: The setup function is the heart of the Composition API. It's where you define reactive state, logic, and computed properties using dedicated functions like ref, reactive, and computed.
- Lifecycle Hooks (Optional): Similar to the Options API, you can use lifecycle hooks (e.g., onMounted, onUpdated) to perform actions at specific stages of a component's lifecycle.
```
<script setup>
import { ref } from 'vue';

const message = ref('Hello from Vue!');
const count = ref(0);

const incrementCount = () => {
  count.value++;
};

const doubledCount = computed(() => count.value * 2);
</script>

<template>
  <div>
    <p>{{ message }}</p>
    <button @click="incrementCount">Count: {{ count }}</button>
    <p>Doubled Count: {{ doubledCount }}</p>
  </div>
</template>

```
We import ref from Vue to create reactive state variables.
Reactive state (message, count) and functions (incrementCount) are defined directly within the <script setup> tag.
The computed property doubledCount is defined using computed.
The template remains similar, referencing the reactive state and computed property.

### setup() and created()
1. setup() (Composition API):
* Introduced in Vue 3.
* The setup function is the entry point for defining component logic in the Composition API. It's where you declare reactive state, define functions (methods), and create computed properties using functions like ref, reactive, and computed provided by Vue.
```
<script setup>
import { ref } from 'vue';

const message = ref('Hello from Vue!');
const count = ref(0);

const incrementCount = () => {
  count.value++;
};

const doubledCount = computed(() => count.value * 2);

return { message, count, incrementCount, doubledCount };
</script>

<template>
  <div>
    <p>{{ message }}</p>
    <button @click="incrementCount">Count: {{ count }}</button>
    <p>Doubled Count: {{ doubledCount }}</p>
  </div>
</template>

```
2. created() (Options API):
* The created hook is called synchronously after the component has been created (before mounting). It's a good place to perform actions that need to be done before the component is inserted into the DOM, such as fetching initial data from an API.
```
export default {
  data() {
    return {
      message: 'Hello from Vue!',
      items: [],
    };
  },
  created() {
    fetch('https://api.example.com/items')
      .then(response => response.json())
      .then(data => {
        this.items = data;
      })
      .catch(error => console.error(error));
  },
  // ... other options
};

```
| **Feature** | **setup() (Composition API)** | **created() (Options API)** |
| :---         |     :---:      |          ---: |
|   Context   | Composition API     | Options API    |
| Purpose    | Define reactive state, methods, computed properties       | Perform actions before mounting      |
| Usage    | Within <script setup> tag       | Within options object      |
| Execution Timing    | Synchronous       | Synchronous after creation      |
| Access to DOM    | No direct DOM access     | Limited DOM access (might be discouraged)     |

### Refs
* Refs (short for references) are a core concept in Vue.js for creating reactive references to DOM elements or JavaScript values. They provide a way to directly access and manipulate these elements or values within your components.
* Key Characteristics:

    1. Reactivity: Refs are reactive, meaning changes to the value they hold will trigger a re-render of the component's template if used within it.
    2. Creation: You can create refs using the ref function provided by Vue. You can either call it directly or use it as an attribute in your template.
    3. Accessing Refs:
        - Template: Use the ref name prefixed with $refs to access the element or value within the template.
        - JavaScript: Access the ref value directly using the ref object returned by the ref function.
#### Creating Refs:
1. Using ref function:
    ```
        const myRef = ref(null); // Create an empty ref
        const someValue = ref('Initial value'); // Ref holding a string
    ```
2. Using ref attribute in template:
```
<input ref="myInput">

<script>
export default {
  setup() {
    const myInputRef = ref(null);
    return { myInputRef };
  }
}
</script>

```
#### Accessing Refs:
1. In Template:
```
<button @click="$refs.myButton.focus()">Focus Button</button>
```
2. In JavaScript:
```
myRef.value = someNewElement; // Assigning a new DOM element to the ref

console.log(someValue.value); // Accessing the current value of the ref
```

### Reactive()
*  Creates a reactive object. Any changes to the properties within the object will trigger a re-render.
```
import { reactive } from 'vue';

const person = reactive({
  firstName: 'John',
  lastName: 'Doe',
});

// Later
person.firstName = 'Jane'; // Update a property within the reactive object

```
| **Feature** | **ref** | **reactive** |
| :---         |     :---:      |          ---: |
|   Purpose   | Creates a reactive reference to a single value     | Creates a reactive object    |
| Data Type    | Primitive values (strings, numbers, booleans), objects       | Objects (with potential nested properties)      |
| Reactivity Depth    | Tracks changes to the referenced value       | Deep reactivity - tracks changes to all properties      |
| Use Cases    | Single values, DOM element references       | Complex data structures      |


### what is computed()
* the computed function is used to define derived properties within your components. These derived properties are not directly stored in the component's data but are calculated based on other reactive data properties. 
```
export default {
  data() {
    return {
      count: 0,
    };
  },
  computed: {
    doubledCount() {
      return this.count * 2;
    },
  },
  // ... other options
};

```

###  watch and watcheffect
* Both watch (Options API) and watchEffect (Composition API) are functionalities in Vue.js used to track changes in reactive data and execute side effects in response to those changes.
1. **watch (Options API)**: Monitors specific reactive data properties and executes a callback function whenever the value of those properties changes. Defined within the watch property of your component's options object.
```
watch: {
  // Property to watch: callback function
  someProperty(newValue, oldValue) {
    // Code to execute when the property changes
  },
  // You can watch multiple properties using separate entries
},
```
2. **watchEffect (Composition API)**: Similar to watch, it tracks changes in reactive data but uses a more functional approach. Defined as a function within the <script setup> tag or setup()

### Async and Await
* Async/await is a powerful combination of keywords used in JavaScript (introduced in ES2017) to handle asynchronous operations in a more synchronous-like manner. 
*  The async keyword is used before the function keyword when defining an asynchronous function. It marks the function as asynchronous, meaning it can perform operations that might take time to complete (like network requests, file I/O, etc.) without blocking the main thread execution.An asynchronous function always returns a Promise object, even if it doesn't explicitly use the return statement.
* The await keyword can only be used within an async function. It pauses the execution of the async function at that point until the Promise returned by the awaited expression (like an API call) resolves or rejects. If the Promise resolves, the await expression returns the resolved value. If the Promise rejects, the await expression throws an error. 
* After the awaited expression settles (resolves or rejects), the async function continues execution from the line after the await.
*  Compared to traditional Promise-based code with .then and .catch chains, async/await makes asynchronous code appear more synchronous and easier to read.
```
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}

fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));

```
* `fetchData` is an async function that fetches data from an API. `await fetch(...)` pauses the function until the fetch completes and returns the response object. `await response.json()` pauses again until the response is converted to JSON and returns the parsed data. The `then` and `catch` are used at the end to handle the resolved data or any errors.
### synchronous and asynchronous 
* A synchronous function executes line by line in a sequential manner. It doesn't perform any operations that might take time to complete (like waiting for network requests or user input) until the current line finishes execution. The main thread is blocked while the synchronous function is running, meaning the browser or JavaScript engine can't process anything else until the function finishes.
* An asynchronous function can perform operations that take time to complete without blocking the main thread. It typically uses mechanisms like callbacks or Promises to handle the completion of these long-running operations at a later time. The main thread can continue processing other tasks while the asynchronous operation is ongoing.
```
// Synchronous (blocks main thread)
function getDataSync() {
  // Simulate a long-running operation (e.g., network request)
  for (let i = 0; i < 1000000; i++) {}
  return "Data from synchronous function";
}

// Asynchronous (non-blocking)
async function getDataAsync() {
  // Simulate an asynchronous operation (e.g., fetch API call)
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}

```
