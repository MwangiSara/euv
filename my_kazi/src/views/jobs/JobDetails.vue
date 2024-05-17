<template>
  <h1>Job Details</h1>
  <!-- <p>Job Id is: {{ $route.params.id }}</p> -->
  <p>Job Id is: {{ id }}</p>
  <!-- $route: This refers to the current route object accessible within Vue components. -->
  <!-- .params: This is a property on the $route object that holds an object containing all the route parameters extracted from the URL. -->
</template>

<script>
export default {
  props: ['id'], // fetching id object as a prop from the jobs.vue file
  data(){
    return{
      // id: this.$route.params.id //no need for this line coz we are geting the id as a prop
    }
  }
}
</script>

<style>

</style>