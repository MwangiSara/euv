<template>
    <div class="backdrop">
        <div class="modal">
            <h1>Modal Header</h1>
            <p>modal content</p>
        </div>
    </div>
</template>

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
</style>