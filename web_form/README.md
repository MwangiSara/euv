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
