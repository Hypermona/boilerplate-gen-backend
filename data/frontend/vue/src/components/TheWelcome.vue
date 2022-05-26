<script setup>

import { ref, onMounted } from 'vue';
const message = ref("This is data from frontend")

// functions that mutate state and trigger updates
function add(data) {
  message.value = data
}


  fetch('http://localhost:5000/api')
  .then((res)=>res.json())
  .then(d=>{
    console.log(d.message)
    add(d.message)
  })
  .catch(err=>console.log(err));


</script>
<style>
.main{
  text-align: center;
}
</style>
<template>
 <div class="main">
   <h2 >{{message}}</h2>
 </div>
      

</template>
