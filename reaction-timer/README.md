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

