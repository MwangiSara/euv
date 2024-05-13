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

