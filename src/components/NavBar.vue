<template>
  <nav class="nav">
    <div class="logo">
      <img src="@/assets/logo.png" alt="" />
    </div>
    <div class="links">
      <ul>
        <li v-for="(link, i) in links" :key="i">{{ link }}</li>
      </ul>
    </div>
    <div class="btns">
      <button type="submit">LOG IN</button>
      <button type="submit">SIGN UP</button>
    </div>
  </nav>
  <div class="content">
    <h3>Hello from component</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: "my logo",
      links: ["link 1", "link 2", "link 3"],
    };
  },
};
</script>
<style scoped>
button {
  color: green;
}
</style>
<style>
.nav {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  height: 30px;
  margin-top: -20px;
  background-color: #3b5466;
  color: aliceblue;
}
ul {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  list-style: none;
}
img {
  width: 40px;
}
.btns {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  height: 30px;
}
</style>
