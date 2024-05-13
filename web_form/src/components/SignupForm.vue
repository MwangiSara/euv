<template>
  <form action="">
    <label for="">Email: </label>
    <input type="email" v-model="email" name="" id="" required>

    <label for="">Password: </label>
    <input type="password" v-model="password" name="" id="" required>
  </form>
  <p>Email: {{ email }}</p>
  <p>Password: {{ password }}</p>
</template>

<script>
export default {
    data(){
        return{
            email : '',
            password: '',
        }
    }

}
</script>

<style>
form{
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
label{
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold 
}
input{
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}
</style>