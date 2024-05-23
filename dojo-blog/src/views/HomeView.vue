<template>
  <div class="home">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length"><PostsList :posts="posts" /></div>
    <div v-else>Loading...</div>
    <!-- <button @click="showposts = !showposts">Toggle Posts</button> -->
    <!-- <button @click="posts.pop()">delete Posts</button> pop removes one item in an array -->
  </div>
</template>

<script>
import getPosts from '@/composables/getPosts';
import PostsList from '@/components/PostsList.vue'

export default {
  name: 'HomeView',

  setup(){ 
    const {posts, error, load} = getPosts()
    
    load() //envoking the load function
    // const showposts = ref(true)
    return { posts, error }
  },
  components: { PostsList }, 
}
</script>























<!-- <template>
  <div class="home">
    <h1>home</h1>
    <h2>refs</h2>
    <p ref="p">My name is {{ name }}, I'm {{ age }} years old</p>
    <button @click="handleClick"> Click Me</button>
    <p>My name is {{ name2 }}, I'm {{ age2 }} years old</p>
    <button @click="handleClick2"> Click Me2</button><br>
    <button @click="age2++">Increase Age</button><br>
    <input type="text" v-model="name2" placeholder="">  change Mell to another name using v-model -->
    <!-- <br><br>
    <p>My location is {{ ninjaone.location }}, I'm {{ ninjaone.height }} tall</p>
    <button @click="updateNinjaOne">change height</button><br>

    <h2>reactive</h2>
    <p>My location is {{ ninjatwo.location }}, I'm {{ ninjatwo.height }} tall</p>
    <button @click="updateNinjaTwo">change height</button><br>

    <h2>Computed()</h2>
    <input type="text" v-model="search" placeholder="search for cities">
    <p>Search term - {{  search }}</p>
    <button @click="stopingWatch">stop watch</button>
    <div v-for="city in matchingCities" :key="city">
      {{ city }}
    </div>

  </div>
</template> -->

<!-- <script>
import { ref, reactive, computed, watch, watchEffect } from 'vue'; -->

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


    //seeing the difference between refs and reactive
  const ninjaone = ref({ height: 300, location: "Nairobi"})
  const ninjatwo = reactive({height: 200, location: "Kakamega"})
  
  const updateNinjaOne= () => {
    ninjaone.value.height =400
  }
  const updateNinjaTwo= () => {
    //we dont need to use the value property using reactive like in ref, we access the properties directly
    ninjatwo.height=100
  }


  // creating computed function
  const cities = ref(['Mombasa', 'Kisumu', 'Nairobi', 'Eldoret'])
  const search = ref('')

  //creating a watch, so we are watching the saerch ref and a function which will fire everytime a saerch ref changes
  const stopWatch = watch(search, () => {
    console.log('watch function run')
  })
  //creating watcheffect. it runs initially when the component first loads
  const stopEffect = watchEffect(() => {
    console.log('watcheffect function run',search.value)
  })

  // creating a computed property which will return an updated array based on a search term 
  const matchingCities = computed(() => {
    return cities.value.filter((name) => name.includes(search.value))
  })

  //stop watch, const stopWatch equals to a function that stops watch and watch effect
  const stopingWatch = () => {
    stopWatch()
    stopEffect()
  }
  

    return {name, age, handleClick,p, name2, age2, handleClick2, ninjaone, updateNinjaOne,ninjatwo,updateNinjaTwo, cities, search, matchingCities, stopingWatch} 
  },
  created(){
    console.log('created')
  },
  mounted(){
    console.log("mounted")
  }
}
<!-- </script> -->
