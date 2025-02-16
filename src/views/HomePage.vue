<template>
  <MyContent :students="students" />
  <div class="HomePage">
    <h3>Home Page</h3>
    <h5>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet quaerat
      nemo animi consequatur a in debitis illo perferendis temporibus aperiam!
      Consequatur est exercitationem at quas, iusto optio amet architecto
      nesciunt!
    </h5>
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
      students: ["hahah"],
    };
  },
};
</script>
<style scoped lang="scss">
.HomePage {
  h5 {
    font-weight: lighter;
  }
  h3 {
    color: blue;
  }
}
</style>
