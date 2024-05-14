<template>
  <form action="">
    <label for="">Email: </label>
    <input type="email" v-model="email" name="" id="" required>

    <label for="">Password: </label>
    <input type="password" v-model="password" name="" id="" required>

    <label for="">Role: </label>
    <select v-model="role">
        <option value="developer">Web Developer</option>
        <option value="designer">Web Designer</option>
    </select>

    <label for="">Role: </label>
    <input type="text" name="" id="" v-model="tempSkill" @keyup.alt="addskill"> <!-- alt in keyup is used to remove the coma from being seen -->

    <div v-for="skill in skills" :key="skill" class="pill" >
       <span @click="removeSkill(skill)"> {{ skill }} </span>
    </div>

    <div class="terms">
        <input type="checkbox" v-model="terms" name="" id="">
        <label for="">Accept Terms And Conditions</label>
    </div>

    <!-- <div >
        <input type="checkbox" value="Jane" v-model="names" name="" id="">
        <label for="">Jane</label>
    </div>

    <div >
        <input type="checkbox" value="Doe" v-model="names" name="" id="">
        <label for="">Doe</label>
    </div> -->
  </form>
  <p>Email: {{ email }}</p>
  <p>Password: {{ password }}</p>
  <p>Role: {{ role }}</p>
  <p>Role: {{ terms }}</p>
  <!-- <p>Role: {{ names }}</p> -->

</template>

<script>
export default {
    data(){
        return{
            email : '',
            password: '',
            role: 'designer',
            terms: false,
            // names: []
            tempSkill: '',
            skills: []
        }
    },
    methods: {
        addskill(e){
            // console.log(e) //used for printing the keys pressed in keyboard
            if (e.key === ',' && this.tempSkill){
                if(!this.skills.includes(this.tempSkill)){ //if the skill is already in tempSkill then dont add it
                    this.skills.push(this.tempSkill) //pushing the skills to tempSkill
                }
                this.tempSkill = ''
            }
        },
        removeSkill(skill){
            console.log(skill)
            this.skills = this.skills.filter(id => id !== skill);
        },
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
input, select{
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}
input[type="checkbox"] {
    display: inline-block;
    width: 11px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
}
.pill{
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    color: #777;
    cursor: pointer;
    text-transform: uppercase;
}
</style>