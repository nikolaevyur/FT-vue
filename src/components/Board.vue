<template>
  <div class="board">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.board {
  width: 100%;
  max-width: 1280px;
  min-width: 1060px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: 642px;
  left: calc(50% - 1280px / 2);
  top: calc(50% - 642px / 2 + 54px);
  background: #ffffff;
  box-shadow: 0px 0px 5px 3px #b5b5b5;
  border-radius: 5px;
  row-gap: 15px;
}
</style>