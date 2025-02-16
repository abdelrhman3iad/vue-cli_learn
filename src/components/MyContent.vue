<template>
  <div class="my-content">
    <ul v-for="(student, i) in students" :key="i">
      <li>{{ student }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MyContent",
  props: ["students"],
};
</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
}
</style>
