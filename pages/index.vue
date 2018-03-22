<template>
  <section>
    <div class="container" id="content"></div>
    <script src="/js/markdown.js"></script>
    <script src="/js/parser.js"></script>
  </section>
</template>



<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style>
.container {
  margin: 25px 50px;
  min-height: 100vh;
}

h1 {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
}

h3 {
  margin-top: 10px; 
  font-weight: 300;
  font-size: 22px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

a {
  padding-top: 15px;
}
</style>
