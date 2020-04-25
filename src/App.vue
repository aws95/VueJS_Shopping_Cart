<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #41B883;">
      <a class="navbar-brand text-white" href="#">Test App</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="navbar-brand">
              <router-link to="/">Home</router-link>
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link">
              <router-link to="/product-list">Product List</router-link>
            </a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link">
              <router-link to="/cart">
                <font-awesome-icon icon="cart-plus" />
              </router-link>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
nav .navbar-nav li a {
  color: white !important;
}
</style>
