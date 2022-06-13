<template>
  <select class="input" v-model="checked" @change="onChange">
    <option selected disabled>
      <slot></slot>
    </option>
    <option
      v-for="(item, index) in obj"
      :key="index"
      :index="index"
      :item="item"
      :value="index"
    >
      {{ item }}
    </option>
  </select>
</template>

<script>
export default {
  data() {
    return {
      checkedItem: false,
    };
  },
  props: {
    item: String,
    text: String,
    value: String,
    index: String,
    obj: Object,
  },

  computed: {
    checked: {
      get() {
        return this.value;
      },
      set(val) {
        this.checkedItem = val;
      },
    },
  },

  methods: {
    onChange(e) {
      this.$emit("input", this.checkedItem);
    },
  },
};
</script>

<style lang="scss" scoped>
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