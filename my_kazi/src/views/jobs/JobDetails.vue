<template>
  <h1>Job Details</h1>
  <!-- <p>Job Id is: {{ $route.params.id }}</p> -->
  <div v-if="job">
    <h2>{{ job.title }}</h2>
    <p>Job Id is: {{ id }}</p>
    <p>{{ job.details }}</p>
  </div>
  <div v-else>
    <p>Loading Jobs Details...</p>
  </div>
  
  <!-- $route: This refers to the current route object accessible within Vue components. -->
  <!-- .params: This is a property on the $route object that holds an object containing all the route parameters extracted from the URL. -->
</template>

<script>
export default {
  props: ['id'], // fetching id object as a prop from the jobs.vue file
  data(){
    return{
      // id: this.$route.params.id //no need for this line coz we are geting the id as a prop
      job : null
    }
  },
  mounted(){
  fetch('http://localhost:3000/jobs/' + this.id) 
  //the code uses the fetch API to make an HTTP GET request to the URL http://localhost:3000/jobs
    .then(resource => resource.json())
    .then(data => this.job = data)
    .catch(error => console.log(error.message))
}
}
</script>

<style>

</style>