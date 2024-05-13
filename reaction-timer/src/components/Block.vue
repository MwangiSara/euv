<template>
  <div class="block" v-if="showBlock" @click="stopTimer">
    CLICK ME
  </div>
</template>

<script>
export default {
    props: ['delay'],
    data(){
        return{
            showBlock: false,
            timer: null,
            reactionTime: 0
        }
    },
    methods: {
        startTimer() {
            this.timer= setInterval(() => {
                this.reactionTime += 10
            },10)
        },
        stopTimer(){
            clearInterval(this.timer)
           // console.log(this.reactionTime)
           this .$emit('end', this.reactionTime)
           //sending data(including reaction time) to app.vue using emit 
        }
    },
    mounted(){
        console.log("Block component mounted")
        setTimeout(() => {
            this.showBlock = !this.showBlock
            this.startTimer()
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
        background: #0faf87;
        color: white;
        text-align: center;
        padding: 100px 0;
        margin: 40px auto;
    }
</style>