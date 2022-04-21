<template>
  <div class="crudcontent">
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .crudcontent {
    grid-area: crudcontent;
    background-color: grey;
    overflow-x:scroll;
    overflow-x: hidden;    
  }
</style>