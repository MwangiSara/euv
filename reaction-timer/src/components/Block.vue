<template>
  <div class="block" v-if="showBlock">
    CLICK ME
  </div>
</template>

<script>
export default {
    props: ['delay'],
    data(){
        return{
            showBlock: false
        }
    },
    mounted(){
        console.log("all components mounted")
        setTimeout(() => {
            this.showBlock = !this.showBlock
        }, this.delay)
    },
    updated(){
        console.log("components updated")
    },
    unmounted(){
        console.log("Block component unmounted")
    }
}
</script>

<style>
    .block{
        width: 400px;
        border-radius: 20px;
        background: #8faf87;
        color: white;
        text-align: center;
        padding: 100px 0;
        margin: 40px auto;
    }
</style>