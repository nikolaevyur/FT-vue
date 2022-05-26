<template>
	<div class="app" :class="['app3', {'app2': class2}]" :style="style" :id="app1" @click="onClick">
		<!-- <TestComp1 placeholder="test1" :param1="counter" :param2="arr" :param3="obj" :text="app1" v-model="app1" @input="onInput" v-if="class2"/>
		<TestComp2 placeholder="test1" :param1="counter" :param2="arr" :param3="obj" :text="app1" v-model="app1" @input="onInput" v-else/> -->
		<component :is="componentName" placeholder="test1" :param1="counter" :param2="arr" :param3="obj" :text="app1" v-model="app1" @input="onInput" />
	</div>
</template>

<script>

export default {
	data() {
		return {
			alert: 'Hello <br/>word',
			app1: 'my-app',
			counter: 0,
			arr: [1, 2, 3, 4],
			obj: {
				text: 'dddd'
			},
			status: ['NEW', 'IN_PROGRESS', "COMPLETED"]
		}
	},

	
	computed: {
		sfdsfdsf() {
			return 11
		},
		text() {
			return 'Current date' + new Date().toISOString() + '; count: ' + this.counter
		},
		text2() {
			return 'Hello ' + this.text
		},
		class2() {
			return this.counter > 2
		},
		style() {
			return {
				'border': '1px solid red',
				backgroundColor: 'yellow'
			}
		},
		componentName() {
			return 'TestComp' + this.counter
		}
	},
	mounted() {
		// this.$api.Events.getEvents()
		// .then((data) => {
		// 	console.log(data);
		// })
	},
	methods: {
		getDate() {
			return new Date()
		},
		onClick(e) {
			this.counter+=1;
		},
		updateText(val) {
			this.app1 = val
		},
		onInput(e) {
			console.log(e)
		}
	},
}
</script>

<style lang="scss" scoped>
	.app {
		background: pink;
		box-sizing: border-box;

		/deep/ * {
			box-sizing: border-box;
		}
	}

	.app2 {
		background: green;
	}
</style>
