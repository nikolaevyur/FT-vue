<template>
  <div class="checkbox">
    <label class="checkbox__item">
      <input
        type="checkbox"
        v-model="checked"
        :value="index"
        @change="onChange"
      />
      <span>{{ item }}</span>
    </label>
  </div>
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
    value: Array,
    index: String,
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

<style lang='scss' scoped>
.checkbox {
  &__item {
    display: flex;
    flex-direction: row;
  }
}
</style>