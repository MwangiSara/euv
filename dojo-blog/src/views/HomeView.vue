<template>
  <div class="home">
    <p>My name is {{ name }}, I'm {{ age }} years old</p>
    <button @click="handleClick"> Click Me</button>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  //this is a basic way of creating a composition API, we create a setup() hook, which always runs first, and inside it we can run any js script and the end we return any value we want to make available to the component template
  setup(){
    //always output first befor created and mounted
    console.log('setup')
    
    let name = 'Sarah'
    let age = 30

    const handleClick = () => {
      console.log("You have Clicked me")
    }

    return {name, age, handleClick}
  },
  created(){
    console.log('created')
  },
  mounted(){
    console.log("mounted")
  }
}
</script>
