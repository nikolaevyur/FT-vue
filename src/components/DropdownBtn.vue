<template>
  <div class="dropdown-wrapper">
    <div
      class="dropdown-button "
      :class="{ '-active': isActive }"
      @click="toggle"
    >
      {{ text }}
      <inside><slot name="inside"></slot></inside>
    </div>
    <div class="dropdown-menu input" v-if="isActive">
      <slot :isActive="isActive"></slot>
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  data() {
    return {
      isActive: false,
    };
  },
  props: {
    text: String,
  },

  computed: {
    href() {
      return `#dropdown-icon`;
    },
  },
  mounted() {},
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style lang='scss' scoped>
.dropdown {
  &-wrapper {
    position: relative;
  }
  &-button {
    display: flex;
    justify-content: center;
    color: #b5b5b5;
  }
  &-menu {
    position: absolute;
    right: 0px;
    left: 0px;
    border: 1px solid black;
    background-color: #fff;
    &-item {
      border-bottom: 1px solid black;
    }
  }
}
.input {
  background: #ffffff;
  border-radius: 3px;
  border: 1px solid #b5b5b5;

  &:hover {
    background-color: #ffffff;
    border: 1px solid #715be3;
    box-shadow: inset 0px 0px 2px 1px #b5b5b5;
    border-radius: 3px;
  }

  &:focus {
    background: #ffffff;
    // border: 1px solid red;
    box-shadow: 0px 0px 3px 3px rgba(96, 65, 250, 0.5);
    border-radius: 3px;
  }
}
</style>