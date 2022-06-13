<template>
  <div class="user">
    <div class="user__name">
      {{ userData }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  props: {
    userData: String,
  },
};
</script>

<style lang="scss" scoped>
.user:nth-child(2n) {
  background-color: #f2f2f2;
}

.user {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px 30px;
  height: 2.8%;
  column-gap: 10px;

  &__name {
    width: 1200px;
    overflow: hidden;
    padding-left: 10px;
  }
}
</style>