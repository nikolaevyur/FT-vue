<template>
<div><Checkbox v-model='checkedNames'/>
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