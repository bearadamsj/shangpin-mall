<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <h1>welcome to first vue project</h1>
    <Footer v-show="$route.meta.showFooter"></Footer>
  </div>
</template>

<script>

import Header from "./components/Header"
import Footer from "./components/Footer"

export default {
  name: 'App',
  components: {
    Header, Footer
  }
}
</script>
 
<style></style>
