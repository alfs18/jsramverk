<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

<template>
  <div id="app" class="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
    text-align: center;
}

p,
a {
    font-size: 18pt;
}

body {
    background-color: #f9f0db;
}

nav {
    background-color: #fff;
    height: 2em;
    text-align: center;
}

.outer-div {
    margin: 2rem auto;
    width: 70vw;
}

@media (min-width: 768px) {
    .outer-div {
        width: 50vw;
    }
}

@media (min-width: 1000px) {
    .outer-div {
        width: 40vw;
    }
    p {
        padding-left: 3em;
    }
}
</style>
