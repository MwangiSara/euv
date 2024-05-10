<template>
    <div class="backdrop" @click.self="closeModal">
        <!-- when you add self on @click, it means that when we click on the div(backdrop) will it fire the function, and not the inner divs -->
        <div class="modal" :class="{ sale_class: theme === 'sale'}">
            <h1>{{header}}</h1>
            <p>{{ text }}</p>
            <p>{{ text2 }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['header','text','text2','theme'], //elements have to be in a string
        methods: {
            closeModal(){
                this.$emit('close')
            }
        }
    }
    // export default is a way to expose a single component from a .vue file for use in other parts of your application. It's a fundamental concept for building reusable UI elements.
</script>

<style scoped> 
/* style scoped means that the parent component's styles will not leak into child components. However, a child component's root node will be affected by both the parent's scoped CSS and the child's scoped CSS. This is by design so that the parent can style the child root element for layout purposes. */
    .modal {
       width: 400px;
       padding: 20px;
       margin: 10px auto;
       background: white;
       border-radius: 10px; 
    }
    .backdrop {
        top: 0;
        position: fixed;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
    }
    .modal h1{
       color:#03cfb4; 
       border: none;
       padding: 0;
    }
    .modal p{
        font-style: normal;
    }
    .sale_class{
        background: crimson;
        color: white;
    }
    .sale_class h1{
        color: white;
    }
</style>