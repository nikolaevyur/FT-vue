<template>
  <div class="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  computed: {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.app {
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 50px;
  font-family: "Roboto", sans-serif;
  background: #E5E5E5;
}

</style>