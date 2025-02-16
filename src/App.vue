<template>
  <NavBar />
  <!-- <MyContent :students="students" /> -->
  <router-view />
</template>
<script>
import NavBar from "@/components/NavBar.vue";
// import MyContent from "@/components/MyContent.vue";
export default {
  components: {
    NavBar,
    // MyContent,
  },
  data() {
    return {
      // students: ["ahmed", "mostafa", "sayed"],
    };
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
