 # reaction-timer

<!--## Project setup
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

* setTimeout in Vue.js can be used for asynchronous operations or for scheduling tasks to be executed after a delay, just like in regular JavaScript.

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


