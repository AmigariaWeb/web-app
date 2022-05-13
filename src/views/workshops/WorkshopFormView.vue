<script setup>
import CreateWorkshopForm from '@/components/AppWorkshop/CreateWorkshopForm.vue';

</script>

<template>
	<main class="content">
		<CreateWorkshopForm />
	</main>
</template>

<style lang="scss">
.content {
	padding: 0;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-between;
	min-height: calc(100vh - var(--header-size));
}

@media(min-width: 640px) {
	.content {
		justify-content: center;
		gap: 1.5rem;
		min-height: 100%;
	}

}
</style>