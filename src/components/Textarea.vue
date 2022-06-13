<template>
  <div>
    <textarea
      type="text"
      :placeholder="placeholder"
      :value="value"
      v-on:input="updateValue($event.target.value)"
      class="input item__input"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    placeholder: String,
  },

  methods: {
    updateValue: function (value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style lang='scss' scoped>
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

.item__input {
  width: 100%;
}

textarea {
        height: 95%;
        width: 100%;
        padding: 5px;
        margin: 5px 0 0 0;
        resize: none;
      }
</style>