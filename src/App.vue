<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        <h1>Bug <img alt="Vue logo" src="./assets/logo.png">iewer</h1>
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #502c1b;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  h1 img {
    height: 2.5rem;
  }
</style>