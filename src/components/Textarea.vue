<template>
  <div><textarea :placeholder='placeholder' v-model='value'></textarea>
  <p>Введено: {{value}}</p>
  </div>
</template>

<script>
export default {
  props:{
    'placeholder': String,
		'value': String
	},

  }
</script>