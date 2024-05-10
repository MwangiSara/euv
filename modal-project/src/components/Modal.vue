<template>
    <div class="backdrop" @click.self="closeModal">
        <!-- when you add self on @click, it means that when we click on the div(backdrop) will it fire the function, and not the inner divs -->
        <div class="modal" :class="{ sale_class: theme === 'sale'}">
            <!-- <h1>{{header}}</h1>
            <p>{{ text }}</p>
            <p>{{ text2 }}</p> -->
            <slot></slot>
            <div class="actions">
                <slot name="links"></slot>
                <slot name="more_links"></slot>
            </div>
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

<style> 
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
    
    .modal .actions{
        text-align: center;
        margin: 30px 0 10px 0;
    }
    .modal .actions a{
        color: #333;
        padding: 8px;
        border: 1px solid #eee;
        border-radius: 4px;
        text-decoration: none;
        margin: 10px;
    }
    .modal.sale_class{
        background: crimson;
        color: white;
    }
    .modal.sale_class h1{
        color: white;
    }
    .modal.sale_class .actions{
        color: white;
    }
    .modal.sale_class .actions a{
        color: white;
    }
</style>