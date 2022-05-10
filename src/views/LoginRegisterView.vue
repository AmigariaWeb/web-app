<script setup>
import { onBeforeMount } from 'vue';
import { useRouter } from 'vue-router'
import { auth } from '../services/firebase';

const router = useRouter();
onBeforeMount(() => {
	if (auth.currentUser) {
		router.push('/')
	}
})

</script>
<template>
	<main class="container" id="login-register">
		<div class="login-wrap">
			<RouterView />
		</div>
	</main>
</template>


<style lang="scss" scoped>
#app {
	main {
		padding-left: 1rem;
	}
}

.container {
	max-width: 800px;
	margin: auto;
	padding: 0px;
	color: var(--clr-emphasis-light);


}

.login {
	&-wrap {
		margin-top: 32px;
	}

	&-block {
		display: flex;
		flex-flow: column;
	}

	&-submit {
		margin: auto;
		display: block;
	}

	&-nav {
		display: flex;
		justify-content: space-evenly;
		align-items: center;

		a {
			color: var(--clr-dark-blue-shadow);
			text-decoration: none;
			padding: 0px 16px;
			background-color: var(--clr-green-light);
			border-bottom-left-radius: 15px;
			border-bottom-right-radius: 15px;
			height: 44px;
			display: flex;
			flex: 1;
		}

		&__link {
			& a.router-link-exact-active {
				background-color: var(--clr-yellow-light);
			}
		}
	}
}

@media (max-width: 640px) {
	#app {
		#login-register {
			padding: 1rem;
		}

	}
}
</style>