# my_kazi

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
