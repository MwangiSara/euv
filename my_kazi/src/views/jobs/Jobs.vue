<template>
  <h1>Jobs</h1>
  <div v-if="jobs.length">
    <div v-for="job in jobs" :key="job.id" class="job">
      <router-link :to="{ name: 'JobDetails', params: {id: job.id}}"> <h2>{{ job.title }} </h2></router-link>
    <!-- name: This property specifies the name of a route you have defined in your router configuration. Here, it's set to "JobDetails".
    params (optional): This property is an optional object that allows you to pass parameters to the target route. In this case, it's used to dynamically set the id parameter. -->
    </div>
  </div>
  <div v-else>
    <p>Loading Jobs...</p>
  </div>

</template>

<script>
export default {
data(){
    return{
        jobs: [],
    }
},
// fetching data from the json-server
mounted(){
  fetch('http://localhost:3000/jobs') 
  //the code uses the fetch API to make an HTTP GET request to the URL http://localhost:3000/jobs
    .then(resource => resource.json())
    //The .then method is used to handle the successful response from the fetch request. The first .then function takes the response object (resource) as an argument. Inside this function, the resource.json() method is called to convert the response body into a JavaScript object
    .then(data => this.jobs = data)
    //The second .then method takes the parsed JSON data (data) as an argument.
    .catch(error => console.log(error.message))
    //The .catch method is used to handle any errors that might occur during the fetch operation. It takes an error object (error) as an argument. Inside the .catch function, the code logs the error message (error.message) to the console for debugging purposes.
}
}
</script>

<style>
.job h2{
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}
.job h2:hover{
  background: #ddd;
}
.job a{
  text-decoration: none;
}
</style>