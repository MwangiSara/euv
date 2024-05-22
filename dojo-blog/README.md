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

