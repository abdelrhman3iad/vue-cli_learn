<template>
  <div class="my-content">
    <ul v-for="(student, i) in students" :key="i">
      <li>{{ student }}</li>
    </ul>
    <!-- <button @click="deleteItem">Delete Item</button> -->
    <hr />
    <p>active is {{ IsActive }}</p>
    <button @click="reverseActive">Delete Item</button>
  </div>
</template>

<script>
export default {
  name: "MyContent",
  props: {
    students: {
      type: Array,
      required: true,
    },
    IsActive: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      myStudents: this.students,
    };
  },
  methods: {
    // deleteItem() {
    //   this.myStudents.shift();
    // },
    reverseActive() {
      this.$emit("changeActive");
    },
  },
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
