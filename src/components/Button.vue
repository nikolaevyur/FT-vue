<template>
  <button class='btn' :class='className'>
    {{ title }}
  </button>
</template>

<script>
export default {
  name: 'button',
  props: {
    title: {
      type: String,
      default: 'text',
    },
    btn_primary: {
      type: Boolean,
      default: false,
    },
    btn_default: {
      type: Boolean,
      default: false,
    },
    btn_success: {
      type: Boolean,
      default: false,
    },
    btn_error: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    className() {
      return {
        'btn-primary': this.btn_primary,
        'btn-error': this.btn_error,
      };
    },
  },
};
</script>

<style lang='scss' scoped>
.btn {
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  height: 24px;
  border-radius: 5px;
  padding: 1px 20px;

  &-default {
    background-color: #f4f4f4;
    border: 1px solid #333333;
    color: #000000;
  }

  &-default:hover {
    background-color: #e1e1e1;
    border: 1px solid #333333;
  }

  &-default:active {
    background-color: #cfcfcf;
    border: 1px solid #333333;
  }

  &-default:disabled {
    background: #b5b5b5;
    border: 1px solid #b5b5b5;
    border-radius: 5px;
  }

  &-primary {
    color: #f4f4f4;
    background-color: #7b61ff;
    border: none;
  }

  &-primary:hover {
    background-color: #8a73ff;
  }

  &-primary:active {
    background-color: #715be3;
  }

  &-success {
    color: #f4f4f4;
    background-color: #5ee48c;
    border: none;
  }

  &-success:hover {
    background-color: #80f0a6;
  }

  &-success:active {
    background-color: #4bd379;
  }

  &-error {
    color: #f4f4f4;
    background-color: #ff6161;
    border: none;
  }

  &-error:hover {
    background-color: #ff8080;
  }

  &-error:active {
    background-color: #d65d5d;
  }

  &-disabled {
    background-color: #b5b5b5;
  }
}
</style>