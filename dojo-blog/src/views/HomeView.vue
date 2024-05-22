<template>
  <div class="home">
    <p ref="p">My name is {{ name }}, I'm {{ age }} years old</p>
    <button @click="handleClick"> Click Me</button>
    <p>My name is {{ name2 }}, I'm {{ age2 }} years old</p>
    <button @click="handleClick2"> Click Me2</button><br>
    <button @click="age2++">Increase Age</button><br>
    <input type="text" v-model="name2" placeholder=""> <!-- change Mell to another name using v-model -->
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

    //reating reactive refs so that values can change in the template
    const name2 = ref('Mell') // by using const, it doesn't mean that the values won't change, it means the ref is a constant
    const age2 = ref(40)

    const handleClick = () => {
      console.log("You have Clicked me")
      console.log(p) //outputing p to show its refs object property
      console.log(p.value) //outputing the value of p that is the paragraph in template
      p.value.classList.add('test') //adding class 'test' to paragraph in template
      p.value.textContent = 'hello there!' //replaces text in paragragh to hello there
    }
    const handleClick2 = () => {
      //updating age and name with the help of refs because its reactive, it can change
      name2.value = 'Shamy' 
      age2.value = 55
    }

    return {name, age, handleClick,p, name2, age2, handleClick2}
  },
  created(){
    console.log('created')
  },
  mounted(){
    console.log("mounted")
  }
}
</script>
