<template>
  <div class='checkbox'>
    <input type='checkbox' id='jack' value='Джек' v-model='checkedNames' />
    <label for='jack'>Джек</label>
    <input type='checkbox' id='john' value='Джон' v-model='checkedNames' />
    <label for='john'>Джон</label>
    <input type='checkbox' id='mike' value='Майк' v-model='checkedNames' />
    <label for='mike'>Майк</label>
    <br />
    <span>Отмеченные имена: {{ checkedNames }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkedNames: []
    }
  },
}

</script>