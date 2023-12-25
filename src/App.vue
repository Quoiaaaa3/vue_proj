<template>
  <router-view/>
  <LayoutFooter/>
</template>
<script>

import LayoutFooter from "./layout-footer/LayoutFooter.vue"

export default {
  components:{
    LayoutFooter
  } 
}

</script>


<style>
  ::-webkit-scrollbar {
    width: 0;
  }
</style>

