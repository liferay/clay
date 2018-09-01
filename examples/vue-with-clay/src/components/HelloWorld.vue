<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p><clay-badge v-bind:label="label"></clay-badge></p>
    <p><clay-button v-on:click="count++" label="Click (WebComponent)"></clay-button></p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      count: 0
    }
  },
  computed: {
    label: function () {
      return `"${this.count}"`;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
