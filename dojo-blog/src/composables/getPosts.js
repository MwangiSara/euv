import { ref } from 'vue';

const getPosts = () => {
    const posts = ref([])
    const error = ref(null)

    //fetching data from db.json
    const load= async () =>{
      try{ //here we try to catch data
        let data = await fetch('http://localhost:3000/posts')
        console.log(data) //output data info to console, rem to add load() so as to work
        if(!data.ok){
          throw Error('No Data Available')
        }
        posts.value = await data.json() //`await data.json()` pauses again until the response is converted to JSON and puts the data in const posts
      }
      catch(err){ //if we dont, the catch block will catch the error from the try block, therefore the err will be the Error thrown
        error.value = err.message //err message will be put in the const error 
        console.log(error.value) 
      }
    }
    return { posts, error, load}
}
export default getPosts //exporting the variable getPosts