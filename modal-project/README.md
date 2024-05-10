# modal-project (learning and creating a vue application)

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