<template>
  <div id="app">
    <el-header id="nav">
      <span class="titel">Perretes</span>
      <router-link to="/">Lista de razas</router-link>|
      <router-link to="/breed">Imagenes de razas</router-link>
    </el-header>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 20px;
  text-align: "left";
  background-color: #409eff;
}

#nav a {
  font-weight: bold;
  color: #e2f8fc;
  padding-right: 2rem;
  
}

#nav a.router-link-exact-active {
  color: #e9d6af;
  font-weight: bold;
  text-decoration: underline;
}
.titel {
  font-size: 1.3em;
  color: #e2f8fc;
  padding-right: 100px;
}
</style>
