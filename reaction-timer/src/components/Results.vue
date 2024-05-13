<template>
    <p>Reaction Time: {{ result_score }} ms</p> 
    <p class="rank">{{ rank }}</p>
</template>

<script>
export default {
 props: ['result_score'],
 data(){
    return{
        rank: null
    }
 },
 mounted(){
    if (this.result_score < 200){
        this.rank = "Rapid reflexes!"
    }else if(this.result_score < 400){
        this.rank = "Quick!"
    }else(
        this.rank = "Slow!"
    )
 }
}
</script>

<style>

.rank{
     font-size: 1.4em;
     color: #0faf87;
     font-weight: bold;
}

</style>