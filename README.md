# notes
* learning vue.js, creating different projects here

* node_modules: This folder is crucial, but you don't directly edit its contents. It stores all the external JavaScript libraries and dependencies your project uses. These dependencies are usually installed using npm install or yarn install

* public: This folder contains static assets that can be directly accessed by the browser, such as your index.html file, which serves as the entry point for your Vue application. It might also hold your CSS files, images, or favicons.

* src: This is the heart of your Vue.js application and contains the source code you'll write and modify. Here's a closer look at some common subfolders within src:
    * App.vue: This is the main component of your application. It serves as the root component from which other components are built.
    * components: This folder holds reusable Vue components that represent smaller, focused parts of your UI (user interface). You can create separate Vue files for headers, navigation bars, forms, etc., and import them into other components or your main App.vue file.
    * assets: This folder can store any additional assets your application needs, such as images, fonts, or custom styles that are specific to your project (as opposed to global styles in main.js).
    * main.js: This file is the entry point for your Vue application's JavaScript code. Here, you typically configure Vue, create a new Vue instance, and mount it to the DOM (Document Object Model) element specified in your index.html file.
    * (Optional) router: If your application involves multiple views or pages, you might have a router folder containing the routing configuration. This helps manage navigation between different parts of your application.
    * (Optional) store: For complex applications with shared state management, you might have a store folder where you set up a Vuex store to manage application state in a centralized way.
* package.json: This file stores metadata about your project, including its name, version, dependencies, and scripts. It's essential for managing dependencies and running build commands.

* The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

### Props
* props are custom attributes that you can register on any component. You define your data on the parent component and give it a value. Then, you go to the child component that needs that data and pass the value to a prop attribute. Therefore, the data becomes a property in the child component.

### custom events 
* custom events are a communication mechanism between components, allowing child components to trigger actions or notify parent components about specific events. Here's a breakdown of how custom events work:

    * Emitting Events (Child Component): A child component can emit a custom event using the $emit method. This method takes two arguments: 
        * Event Name: A string representing the name of the event being emitted.
        * Data (Optional): Any data you want to pass along with the event (e.g., payload).

        ```
            <template>
                <button @click="$emit('itemClicked', selectedItem)">Click Me</button>
            </template>

            export default {
            data() {
                return {
                selectedItem: null
                }
            },
            methods: {
                // ... other methods
                handleClick(item) {
                this.selectedItem = item;
                this.$emit('itemClicked', this.selectedItem);
                }
            }
            }
        ```

    * Listening for Events (Parent Component): A parent component can listen for custom events emitted by its child using the v-on directive with a kebab-cased version of the event name.
* Benefits of Custom Events:

    * Loose Coupling: Components are loosely coupled, as they only need to know the event name and data format, not the internal implementation details of each other.
    * Reusability: Child components can be reused in different contexts by emitting events that parent components can handle in various ways.
    * Modular Communication: Custom events promote a clear separation of concerns, making your application code more maintainable and easier to understand.
    ```
        <template>
            <MyComponent @item-clicked="handleItemClicked" />
        </template>

        methods: {
        handleItemClicked(selectedItem) {
            console.log('Item clicked:', selectedItem);
            // Perform actions based on the received data
        }
        }
    ```

### click event modifiers
* click event modifiers are special directives attached to the @click event handler that alter how the event triggers. They provide a concise way to customize click behavior without needing extra logic within your component methods. Here are some commonly used click event modifiers:

    * .prevent: Prevents the default behavior associated with the click event. 
    * .stop: Stops the event propagation from bubbling up the DOM tree. This can be helpful when you want to handle the click event only on the specific element and not let it trigger on parent elements.
    * .self: Similar to .stop, but only stops propagation to parent elements with the same event listener.
    * .once: Ensures the click event handler is only triggered once for the element. This is useful for one-time actions like initializing something on the first click.
    * Keyboard Modifiers (Vue 2.5+):
        * .ctrl (or .control): Triggers the event only when the Control key is pressed during the click.
        * .shift : Triggers the event only when the Shift key is pressed during the click.
        * .alt (or .option): Triggers the event only when the Alt key (or Option key on macOS) is pressed during the click.
        * .exact (in combination with other modifiers): Ensures only the specified combination of keys (and no others) is pressed for the event to trigger.
        ```
            <button @click.ctrl="handleCtrlClick">Click with Ctrl</button>
            <button @click.ctrl.shift="handleCtrlShiftClick">Click with Ctrl + Shift</button>
            <button @click.exact="handleExactClick">Click without any modifiers</button>
        ```
    * Mouse Button Modifiers:
        * .left (or .buttons with a value of 1): Triggers the event only when the left mouse button is clicked.
        * .middle (or .buttons with a value of 4): Triggers the event only when the middle mouse button is clicked.
        * .right (or .buttons with a value of 2): Triggers the event only when the right mouse button is clicked. 
        ```
            <button @click.right="handleRightClick">Right-click me</button>
        ```

### Slots
* Slots in Vue.js are a powerful feature that allows you to create reusable and flexible components. They provide a way for child components to define sections of their template that can be customized by parent components. Here's a breakdown of how slots work:

    * Defining Slots (Child Component): A child component can define one or more slots using the <slot> tag within its template. You can optionally give the slot a name for better organization using the name attribute.
    ```
        <template>
        <div class="card">
            <header>
            <slot name="title"></slot>
            </header>
            <div class="content">
            <slot />
            </div>
        </div>
        </template>

    ```
    * Filling Slots (Parent Component): The parent component can fill the slots defined in the child component by placing content within the child component's template tags where the <slot> elements are located. You can reference named slots using the v-slot directive and providing the slot name.
    ```
        <template>
        <MyCard>
            <template v-slot:title>This is the card title</template>
            <p>This is the card content.</p>
        </MyCard>
        </template>

    ```
    * Benefits of Slots:

        * Reusable Components: Child components can be designed to accept content through slots, making them adaptable for various use cases in your application.
        * Flexibility for Parent Components: Parent components have control over the content that appears within the child component's slots, allowing for customization and dynamic content.
        * Separation of Concerns: Slots promote a clear separation between the child component's structure and the content that populates it.
    * Additional Features:

        * Scoped Slots (Vue 2.6+): Allow passing data from the child component to the parent component within the slot content. Slot Props: Enable sending data from the parent component to the child component through the slot itself.

### Teleport component
*  the Teleport component is a built-in feature that allows you to move content from a component's template to a different location in the DOM tree. It essentially "teleports" the content to a separate part of your webpage. Here's how it works:

    * Using <Teleport>:You wrap the content you want to move with the <Teleport> component.
        Define the target location using the to prop. This prop takes a CSS selector string that points to the element where you want the content to be inserted.
    ```
        <template>
        <div id="app">
            <Teleport to="#modal-container">
            <p>This content will be teleported!</p>
            </Teleport>
            <div id="modal-container"></div>
        </div>
        </template>
    ```
* Benefits of Teleport:

    * Modular UI Elements: Teleport helps create reusable components that can render their content in different parts of the layout, improving modularity.
    * Complex Layouts: It simplifies the management of complex layouts where content needs to be displayed outside of a component's typical location.
    * Accessibility: Teleport can be useful for positioning elements like modals or tooltips strategically for better accessibility.

### export defaults
* export default acts as a container that encapsulates everything that makes up your reusable Vue component, allowing you to share it throughout your application.
    * Data (Optional): This section holds the initial data that the component will use. It can be an object     containing properties that define the component's state.
    ```
        export default {
        data() {
            return {
            title: 'My Vue Component',
            message: 'This is a simple message.'
            }
        },
        // ... other options
        }

    ```
    * Methods (Optional): This section defines functions specific to the component's behavior. These functions can be used to manipulate data, handle events, or perform other actions within the component.
    ```
        export default {
        // ... other options
        methods: {
            handleClick() {
            this.message = 'Button clicked!';
            }
        }
        }

    ```
    * Computed Properties (Optional): These are properties derived from other data in the component. They are computed on-the-fly whenever the dependencies change, ensuring they always reflect the latest state.

### Props
* Here are some key characteristics of props:

    * One-way data flow: Props establish a one-way data flow from parent to child. The parent component provides the data, and the child component receives it. This helps maintain predictable data flow and prevents unintended modifications.
    * Read-only in child: Props are read-only within the child component. You cannot directly modify the value of a prop inside the child component. This ensures the parent component remains in control of the data.
    * Customization: Props allow you to customize child components with different data sets. This promotes reusability and flexibility.
    * Here's how you define props in a child component:
    ```
    <template>
        <div>
            <h1>{{ message }}</h1>
        </div>
        </template>

        props: {
        message: String // Specifying the prop type (optional)
        }
    ```
    * In the parent component, you pass data to the child using the prop name as a custom attribute, This way, the child component (MyComponent) can access the data passed through the message prop and display it within its template.
    ```
        <template>
            <div>
                <MyComponent message="Hello from the parent!" />
            </div>
        </template>
    ```

### lifecycle hooks
*  lifecycle hooks are special functions that you can define within your components to hook into specific stages of a component's lifecycle. These hooks provide ways to react and perform actions at critical moments during a component's existence.
1. Creation Hooks:

    * beforeCreate (Optional): This hook is called before the component is even created. It's rarely used, but it can be useful for some advanced scenarios like setting up global mixins.

    * created: This hook is called immediately after the component is created. By this point, the options have been merged, data has been observed, and element creation has not yet happened. It's a good place to perform tasks that rely on the component's initial state, such as fetching data from an API.
2. Mounting Hooks:

    * beforeMount (Optional): This hook is called just before the component is mounted (inserted) into the DOM. The DOM element for the component exists at this point, but it hasn't been inserted into the document yet.

    * mounted: This is a commonly used hook that is called immediately after the component is mounted (inserted) into the DOM. The element is now fully available for manipulation, and you can interact with the DOM here if necessary. This might involve things like initializing third-party libraries or starting timers.
3. Update Hooks:

    * beforeUpdate (Optional): This hook is called just before the component updates due to changes in data or props. It's a good place to perform any cleanup tasks before the re-render.

    * updated: This hook is called after the component has been re-rendered due to changes in data or props. The DOM is now updated to reflect the latest state. You can use this hook to perform actions that rely on the updated DOM, but be cautious to avoid infinite loops by using it for data updates.
4. Destruction Hook:

    * beforeUnmount (Optional): This hook is called just before the component is about to be destroyed and removed from the DOM. It's a good place to perform any cleanup tasks like removing event listeners or timers.

    * unmounted: This hook is called after the component has been completely destroyed and removed from the DOM. It's not commonly used, but it can be helpful for debugging purposes.

    ![lifecycle hooks](lifecycle.MuZLBFAS.png)

* setTimeout in Vue.js can be used for asynchronous operations or for scheduling tasks to be executed after a delay, just like in regular JavaScript. To cancel the timeout, you can use clearTimeout

```
    <template>
    <div>
        <p>{{ message }}</p>
    </div>
    </template>

    <script>
    export default {
    data() {
        return {
        message: 'Initial message'
        };
    },
    mounted() {
        setTimeout(() => {
        this.message = 'Updated message after 3 seconds';
        }, 3000); // 3000 milliseconds = 3 seconds
    }
    };
    </script>

```

* setInterval is used to execute code repeatedly at specified intervals until stopped. To stop the interval, you can use clearInterval. Useful for tasks that need to be repeated at regular intervals, such as animations, updating live data, or periodic checks.
```
    let intervalId = setInterval(() => {
  console.log("This will be executed every 1000 milliseconds");
    }, 1000);
```

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

### export defaults
* export default acts as a container that encapsulates everything that makes up your reusable Vue component, allowing you to share it throughout your application.
    * Data (Optional): This section holds the initial data that the component will use. It can be an object     containing properties that define the component's state.
    ```
        export default {
        data() {
            return {
            title: 'My Vue Component',
            message: 'This is a simple message.'
            }
        },
        // ... other options
        }

    ```
    * Methods (Optional): This section defines functions specific to the component's behavior. These functions can be used to manipulate data, handle events, or perform other actions within the component.
    ```
        export default {
        // ... other options
        methods: {
            handleClick() {
            this.message = 'Button clicked!';
            }
        }
        }

    ```
    * Computed Properties (Optional): These are properties derived from other data in the component. They are computed on-the-fly whenever the dependencies change, ensuring they always reflect the latest state.

### Props
* Here are some key characteristics of props:

    * One-way data flow: Props establish a one-way data flow from parent to child. The parent component provides the data, and the child component receives it. This helps maintain predictable data flow and prevents unintended modifications.
    * Read-only in child: Props are read-only within the child component. You cannot directly modify the value of a prop inside the child component. This ensures the parent component remains in control of the data.
    * Customization: Props allow you to customize child components with different data sets. This promotes reusability and flexibility.
    * Here's how you define props in a child component:
    ```
    <template>
        <div>
            <h1>{{ message }}</h1>
        </div>
        </template>

        props: {
        message: String // Specifying the prop type (optional)
        }
    ```
    * In the parent component, you pass data to the child using the prop name as a custom attribute, This way, the child component (MyComponent) can access the data passed through the message prop and display it within its template.
    ```
        <template>
            <div>
                <MyComponent message="Hello from the parent!" />
            </div>
        </template>
    ```

### lifecycle hooks
*  lifecycle hooks are special functions that you can define within your components to hook into specific stages of a component's lifecycle. These hooks provide ways to react and perform actions at critical moments during a component's existence.
1. Creation Hooks:

    * beforeCreate (Optional): This hook is called before the component is even created. It's rarely used, but it can be useful for some advanced scenarios like setting up global mixins.

    * created: This hook is called immediately after the component is created. By this point, the options have been merged, data has been observed, and element creation has not yet happened. It's a good place to perform tasks that rely on the component's initial state, such as fetching data from an API.
2. Mounting Hooks:

    * beforeMount (Optional): This hook is called just before the component is mounted (inserted) into the DOM. The DOM element for the component exists at this point, but it hasn't been inserted into the document yet.

    * mounted: This is a commonly used hook that is called immediately after the component is mounted (inserted) into the DOM. The element is now fully available for manipulation, and you can interact with the DOM here if necessary. This might involve things like initializing third-party libraries or starting timers.
3. Update Hooks:

    * beforeUpdate (Optional): This hook is called just before the component updates due to changes in data or props. It's a good place to perform any cleanup tasks before the re-render.

    * updated: This hook is called after the component has been re-rendered due to changes in data or props. The DOM is now updated to reflect the latest state. You can use this hook to perform actions that rely on the updated DOM, but be cautious to avoid infinite loops by using it for data updates.
4. Destruction Hook:

    * beforeUnmount (Optional): This hook is called just before the component is about to be destroyed and removed from the DOM. It's a good place to perform any cleanup tasks like removing event listeners or timers.

    * unmounted: This hook is called after the component has been completely destroyed and removed from the DOM. It's not commonly used, but it can be helpful for debugging purposes.

    ![lifecycle hooks](lifecycle.MuZLBFAS.png)

* setTimeout in Vue.js can be used for asynchronous operations or for scheduling tasks to be executed after a delay, just like in regular JavaScript. To cancel the timeout, you can use clearTimeout

```
    <template>
    <div>
        <p>{{ message }}</p>
    </div>
    </template>

    <script>
    export default {
    data() {
        return {
        message: 'Initial message'
        };
    },
    mounted() {
        setTimeout(() => {
        this.message = 'Updated message after 3 seconds';
        }, 3000); // 3000 milliseconds = 3 seconds
    }
    };
    </script>

```

* setInterval is used to execute code repeatedly at specified intervals until stopped. To stop the interval, you can use clearInterval. Useful for tasks that need to be repeated at regular intervals, such as animations, updating live data, or periodic checks.
```
    let intervalId = setInterval(() => {
  console.log("This will be executed every 1000 milliseconds");
    }, 1000);
```
## Integration with Vue Router:
1. Define Routes: defined in index.js found in router folder
```
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]
```
2. Configure Router:
```
import VueRouter from 'vue-router';
import { routes } from './routes'; // Import your routes

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});

new Vue({
  router,
}).$mount('#app');

```
* Imports VueRouter from the Vue Router library.
* Imports your defined routes from the separate file (./routes).
* Registers Vue Router as a plugin using Vue.use(VueRouter).
* Creates a new VueRouter instance with the routes configuration.
* Creates a new Vue root instance, associating it with the created router using router.
* Mounts the Vue application to the element with the ID #app in your HTML.

* the <router-view/> component serves as a placeholder where the content of the currently active route will be displayed. When a user navigates to a specific route defined in your router configuration, the content associated with that route is rendered inside the <router-view/> component. This ensures that the appropriate content is displayed based on the current route.

```
<template>
  <div>
    <header>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import { /* Your routes */ } from './routes'; // Import your routes

export default {
  // ...
  routes, // Include routes in the component's options
};
</script>

```

## Dynamic Routing
* Dynamic routing in Vue.js with Vue Router allows you to create flexible navigation links and views that adapt based on data or user interactions. Dynamic routing adds a layer of flexibility by letting you construct routes based on values or expressions at runtime.
* :to: This attribute is used for dynamic routing, allowing you to specify the target route based on data or expressions.
* Vue Router provides features to achieve dynamic routing:
  1. Route Parameters: You can define route paths with placeholders using colons (:paramName). These placeholders will be replaced with values extracted from the URL during navigation.
  ```
  // Router configuration
  const routes = [
    { path: '/jobs/:id', component: JobDetailsView },
  ];

  ```
  2.to Prop with Object: The <router-link> component's :to prop can accept an object for dynamic routing. You can specify the target route name and parameters within this object.
  ```
  <template>
  <router-link :to="{ name: 'JobDetails', params: { id: job.id }}">
    Job Details
  </router-link>
  </template>

  <script>
  export default {
    data() {
      return {
        job: { id: 123 },
      }
    }
  }
  </script>
  ``` 
  3. Accessing Parameters: Within your route component, you can access the dynamic parameters using the $route.params object.
  ```
  <template>
  <div>Viewing Job Details for: {{ $route.params.id }}</div>
  </template>

  <script>
  export default {
    // ...
  }
  ```
# notes
* node_modules: This folder is crucial, but you don't directly edit its contents. It stores all the external JavaScript libraries and dependencies your project uses. These dependencies are usually installed using npm install or yarn install

* public: This folder contains static assets that can be directly accessed by the browser, such as your index.html file, which serves as the entry point for your Vue application. It might also hold your CSS files, images, or favicons.

* src: This is the heart of your Vue.js application and contains the source code you'll write and modify. Here's a closer look at some common subfolders within src:
    * App.vue: This is the main component of your application. It serves as the root component from which other components are built.
    * components: This folder holds reusable Vue components that represent smaller, focused parts of your UI (user interface). You can create separate Vue files for headers, navigation bars, forms, etc., and import them into other components or your main App.vue file.
    * assets: This folder can store any additional assets your application needs, such as images, fonts, or custom styles that are specific to your project (as opposed to global styles in main.js).
    * main.js: This file is the entry point for your Vue application's JavaScript code. Here, you typically configure Vue, create a new Vue instance, and mount it to the DOM (Document Object Model) element specified in your index.html file.
    * (Optional) router: If your application involves multiple views or pages, you might have a router folder containing the routing configuration. This helps manage navigation between different parts of your application.
    * (Optional) store: For complex applications with shared state management, you might have a store folder where you set up a Vuex store to manage application state in a centralized way.
* package.json: This file stores metadata about your project, including its name, version, dependencies, and scripts. It's essential for managing dependencies and running build commands.

* The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

### Props
* props are custom attributes that you can register on any component. You define your data on the parent component and give it a value. Then, you go to the child component that needs that data and pass the value to a prop attribute. Therefore, the data becomes a property in the child component.

### custom events 
* custom events are a communication mechanism between components, allowing child components to trigger actions or notify parent components about specific events. Here's a breakdown of how custom events work:

    * Emitting Events (Child Component): A child component can emit a custom event using the $emit method. This method takes two arguments: 
        * Event Name: A string representing the name of the event being emitted.
        * Data (Optional): Any data you want to pass along with the event (e.g., payload).

        ```
            <template>
                <button @click="$emit('itemClicked', selectedItem)">Click Me</button>
            </template>

            export default {
            data() {
                return {
                selectedItem: null
                }
            },
            methods: {
                // ... other methods
                handleClick(item) {
                this.selectedItem = item;
                this.$emit('itemClicked', this.selectedItem);
                }
            }
            }
        ```

    * Listening for Events (Parent Component): A parent component can listen for custom events emitted by its child using the v-on directive with a kebab-cased version of the event name.
* Benefits of Custom Events:

    * Loose Coupling: Components are loosely coupled, as they only need to know the event name and data format, not the internal implementation details of each other.
    * Reusability: Child components can be reused in different contexts by emitting events that parent components can handle in various ways.
    * Modular Communication: Custom events promote a clear separation of concerns, making your application code more maintainable and easier to understand.
    ```
        <template>
            <MyComponent @item-clicked="handleItemClicked" />
        </template>

        methods: {
        handleItemClicked(selectedItem) {
            console.log('Item clicked:', selectedItem);
            // Perform actions based on the received data
        }
        }
    ```

### click event modifiers
* click event modifiers are special directives attached to the @click event handler that alter how the event triggers. They provide a concise way to customize click behavior without needing extra logic within your component methods. Here are some commonly used click event modifiers:

    * .prevent: Prevents the default behavior associated with the click event. 
    * .stop: Stops the event propagation from bubbling up the DOM tree. This can be helpful when you want to handle the click event only on the specific element and not let it trigger on parent elements.
    * .self: Similar to .stop, but only stops propagation to parent elements with the same event listener.
    * .once: Ensures the click event handler is only triggered once for the element. This is useful for one-time actions like initializing something on the first click.
    * Keyboard Modifiers (Vue 2.5+):
        * .ctrl (or .control): Triggers the event only when the Control key is pressed during the click.
        * .shift : Triggers the event only when the Shift key is pressed during the click.
        * .alt (or .option): Triggers the event only when the Alt key (or Option key on macOS) is pressed during the click.
        * .exact (in combination with other modifiers): Ensures only the specified combination of keys (and no others) is pressed for the event to trigger.
        ```
            <button @click.ctrl="handleCtrlClick">Click with Ctrl</button>
            <button @click.ctrl.shift="handleCtrlShiftClick">Click with Ctrl + Shift</button>
            <button @click.exact="handleExactClick">Click without any modifiers</button>
        ```
    * Mouse Button Modifiers:
        * .left (or .buttons with a value of 1): Triggers the event only when the left mouse button is clicked.
        * .middle (or .buttons with a value of 4): Triggers the event only when the middle mouse button is clicked.
        * .right (or .buttons with a value of 2): Triggers the event only when the right mouse button is clicked. 
        ```
            <button @click.right="handleRightClick">Right-click me</button>
        ```

### Slots
* Slots in Vue.js are a powerful feature that allows you to create reusable and flexible components. They provide a way for child components to define sections of their template that can be customized by parent components. Here's a breakdown of how slots work:

    * Defining Slots (Child Component): A child component can define one or more slots using the <slot> tag within its template. You can optionally give the slot a name for better organization using the name attribute.
    ```
        <template>
        <div class="card">
            <header>
            <slot name="title"></slot>
            </header>
            <div class="content">
            <slot />
            </div>
        </div>
        </template>

    ```
    * Filling Slots (Parent Component): The parent component can fill the slots defined in the child component by placing content within the child component's template tags where the <slot> elements are located. You can reference named slots using the v-slot directive and providing the slot name.
    ```
        <template>
        <MyCard>
            <template v-slot:title>This is the card title</template>
            <p>This is the card content.</p>
        </MyCard>
        </template>

    ```
    * Benefits of Slots:

        * Reusable Components: Child components can be designed to accept content through slots, making them adaptable for various use cases in your application.
        * Flexibility for Parent Components: Parent components have control over the content that appears within the child component's slots, allowing for customization and dynamic content.
        * Separation of Concerns: Slots promote a clear separation between the child component's structure and the content that populates it.
    * Additional Features:

        * Scoped Slots (Vue 2.6+): Allow passing data from the child component to the parent component within the slot content. Slot Props: Enable sending data from the parent component to the child component through the slot itself.

### Teleport component
*  the Teleport component is a built-in feature that allows you to move content from a component's template to a different location in the DOM tree. It essentially "teleports" the content to a separate part of your webpage. Here's how it works:

    * Using <Teleport>:You wrap the content you want to move with the <Teleport> component.
        Define the target location using the to prop. This prop takes a CSS selector string that points to the element where you want the content to be inserted.
    ```
        <template>
        <div id="app">
            <Teleport to="#modal-container">
            <p>This content will be teleported!</p>
            </Teleport>
            <div id="modal-container"></div>
        </div>
        </template>
    ```
* Benefits of Teleport:

    * Modular UI Elements: Teleport helps create reusable components that can render their content in different parts of the layout, improving modularity.
    * Complex Layouts: It simplifies the management of complex layouts where content needs to be displayed outside of a component's typical location.
    * Accessibility: Teleport can be useful for positioning elements like modals or tooltips strategically for better accessibility.
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
