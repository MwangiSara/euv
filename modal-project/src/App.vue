<template>  <!-- template: Defines the HTML structure of the component.-->
  <h1>{{ title }}</h1>
  <p>welcome ...</p>
  <input type="text" ref="names"> &nbsp;
  
  
  <!-- Vue Template Refs are used to refer to specific DOM elements. When the ref attribute is set on an HTML tag, the resulting DOM element is added to the $refs object. We can use the ref attribute and the $refs object in Vue as an alternative to methods in plain JavaScript like getElementById() or querySelector(). -->
  <button @click="handleClick">click me</button> 
  <br> <br>
  <div v-if="showModal">
    <Modal :header="returned_header" text="grap free products!" :text2="['we have used data bind','to get this array']" theme="sale" @close="toggleModal" /> 
  </div>
  <button @click.alt="toggleModal">Open Modal(alt)</button>
  <!-- for you to get the component and use it as an element, you have to import it first and add it in the components method  -->
  <!-- the header attribute is a prop -->
  <!-- for you to not only pass a string as a prop, you have to use v-bind(or : ) -->
  
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components : { Modal },
  data() { //data: Holds the component's initial data.
    return {
      title: "vue vue!",
      returned_header: "Signup For A Give Away",
      showModal: false,
    }
  },
  methods: { //methods: Contains functions specific to the component's behavior.
    handleClick(){
      console.log(this.$refs.names) 
      this.$refs.names.classList.add('active') //The Element.classList is a read-only property that returns a live DOMTokenList collection of the class attributes of the element.
      //A DOMTokenList is, as its name implies, a list—it is an array-like object with a length property and you can index it to retrieve the individual tokens. But more importantly, it defines methods contains() , add() , remove() , and toggle() methods that allow you to treat it as a set of tokens
      this.$refs.names.focus()
    },
    toggleModal(){
      this.showModal = !this.showModal
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
