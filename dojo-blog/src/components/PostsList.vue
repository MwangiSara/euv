<template>
    <div class="posts-lists" v-for="post in posts" :key="post.id">
      <SinglePost :post="post"/>
    </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue';
import SinglePost from './SinglePost.vue';
export default {
props: ['posts'],
components: {SinglePost},
setup(props){ //to use the props in setup, you have to add props as an argument
  console.log(props.posts) //outputing posts on console

  //in composition API when using on lifecycle hooks we add a keyword on, eg onmounted()
  onMounted(() => console.log('Mounted component'))
  onUnmounted(() => console.log('unMounted component'))
  onUpdated(() => console.log('onUpdated component'))

},

}
</script>

<style>

</style>