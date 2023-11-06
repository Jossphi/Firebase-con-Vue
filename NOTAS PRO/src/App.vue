<template lang="pug">
  #app
    #nav
      Navigation
    router-view
</template>

<script>
import Navigation from "@/components/Navigation";
export default {
  components:{
    Navigation
  }
}
</script>
<style lang="css">
  @import "./css/App.css";
</style>


