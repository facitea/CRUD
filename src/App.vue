<template>
<!--
<div class="wrapper">
  <div class="navigate">
    <div class="main_ci"><h1>hawktalk</h1></div>
    <div class="menus">
    <router-link to="/">Home</router-link> |
    <router-link to="/databinding">Data Binding</router-link> |
    <router-link to="/feedboard">Feed</router-link>
    </div>
  </div>
  <div><router-view /></div>
</div>
-->
<div class="wrapper">
  <header></header>
  <nav>
    <ul class="nav-container">
      <li class="nav-item"><router-link to="/">Hawktalk</router-link></li>
      <li class="nav-item"><router-link to="/databinding">Data Binding</router-link></li>
      <li class="nav-item"><router-link to="/feedboard">Feed</router-link></li>
    </ul>
  </nav>
  <div><router-view /></div>
</div>
</template>

<script>
</script>


<style>
/*
.main_ci {
  color: white;
  padding-left: 0.5%;
  display: inline-block;
  padding-right: 5%;
}

.menus {
  display: inline-block;
}

.navigate {
  background-color: brown;
}

h1 {
  padding: 0%;
  margin: 0px;
}
body {
  padding: 0%;
  margin: 0 auto;
}
#app {
  margin: 0 auto;
} */

body {
  margin: 0;
}

.wrapper {
  margin:0 auto;
  display:block;
  width:700px;
  background-clip: content-box;
}

.nav-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: brown;
  list-style-type: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0; /*fixed top,left,right 0 하면 몸체 빼고 대가리는 길게 고정됨*/
}

header {
  margin-top: 65px;
}

.nav-item {
  padding: 15px;
  cursor: pointer;
}

.nav-item a {
  text-align: center;
  text-decoration: none;
  color: white;
}

.nav-item:nth-child(1) {
  background-color: green;
}

.nav-item:hover {
  background-color: grey;
}

</style>
