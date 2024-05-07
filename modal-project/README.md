# modal-project

## Project setup
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
See [Configuration Reference](https://cli.vuejs.org/config/).

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
