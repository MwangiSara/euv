<template>
  <div class="home">
    <p ref="p">My name is {{ name }}, I'm {{ age }} years old</p>
    <button @click="handleClick"> Click Me</button>
  </div>
</template>

<script>
import { ref } from 'vue';

// @ is an alias to /src


export default {
  name: 'HomeView',
  //this is a basic way of creating a composition API, we create a setup() hook, which always runs first, and inside it we can run any js script and the end we return any value we want to make available to the component template
  setup(){
    //always output first befor created and mounted
    console.log('setup')

    const p = ref(null) //creating a ref in composition api. firts import ref from vue
    
    let name = 'Sarah'
    let age = 30

    const handleClick = () => {
      console.log("You have Clicked me")
      console.log(p) //outputing p to show its refs object property
      console.log(p.value) //outputing the value of p that is the paragraph in template
      p.value.classList.add('test') //adding class 'test' to paragraph in template
      p.value.textContent = 'hello there!' //replaces text in paragragh to hello there
    }

    return {name, age, handleClick,p}
  },
  created(){
    console.log('created')
  },
  mounted(){
    console.log("mounted")
  }
}
</script>
