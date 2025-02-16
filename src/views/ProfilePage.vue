<template>
  <MyContent :students="students" />
  <div class="profile-main">
    <p>HelloWorld!</p>
  </div>
</template>

<script>
import MyContent from "@/components/MyContent.vue";
export default {
  components: {
    MyContent,
  },
  data() {
    return {
      students: ["sayed"],
    };
  },
};
</script>
