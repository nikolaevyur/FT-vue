<template>
	<div class="app" :id="app1" @click="onClick">
		<!-- <TestComp1 placeholder="test1" :param1="counter" :param2="arr" :param3="obj" :text="app1" v-model="app1" @input="onInput"/>
		<TestComp2 placeholder="test1" :param1="counter" :param2="arr" :param3="obj" :text="app1" v-model="app1" @input="onInput"/>
		<component :is="componentName" placeholder="test1" :param1="counter" :param2="arr" :param3="obj" :text="app1" v-model="app1" @input="onInput" /> -->
		<DropdownButton  style="width: 200px;" >
			<div class="dropdown-menu-item">
				1
			</div>
			<div class="dropdown-menu-item">
				2
			</div>
			<div class="dropdown-menu-item">
				3
			</div>
		</DropdownButton>
		<DropdownButton  style="width: 200px;" >
			<template #default="aaaa">
				<div class="dropdown-menu-item">
					4 {{ aaaa.isActive}}
				</div>
				<div class="dropdown-menu-item">
					5
				</div>
			</template>
			
		</DropdownButton>
		<Button @click="goToView"></Button>
		<Button @click="goBack">goBack</Button>


		<router-link :to="link1">red</router-link>
		<router-link :to="link2">green</router-link>
		<router-view :key="$route.fullPath"></router-view>

		{{ loading }}
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { setTimeout } from 'timers';

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
			status: ['NEW', 'IN_PROGRESS', "COMPLETED"],

			link1: {
				name: 'ListView1',
				params: {
					color: 'red'
				}
			},
			link2: {
				name: 'ListView1',
				params: {
					color: 'green'
				}
			}
		}
	},
	watch: {
		$route(val) {
			//console.log(val)
		}
	},

	
	computed: {
		...mapGetters(['loading']),
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
		},
		
	},
	mounted() {
		// this.setLoading(true);
		// this.$api.Events.getEvents()
		// .then((data) => {
		// 	setTimeout( () => {
		// 		this.setLoading(false);
		// 	}, 5000)
		// 	console.log(data);
		// })
		this.fetchEvents()
		// this.$router.push({
		// 		name: 'ListView1',
		// 		params: {
		// 			color: 'green'
		// 		}
		// 	})
	},
	methods: {
		...mapActions(['setLoading', 'fetchEvents']),
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
		},
		goToView() {
			this.$router.replace({
				name: "SubListView"
			})
		},
		goBack() {
			this.$router.go(-1);
		}
	},
}
</script>

<style lang="scss" scoped>
	@import '@/scss/fonts';
	.app {
		font-family: 'Roboto', Verdana;
		//background: pink;
		box-sizing: border-box;

		/deep/ * {
			box-sizing: border-box;
		}
	}

	.app2 {
		background: green;
	}
</style>
