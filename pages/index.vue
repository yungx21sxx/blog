<template>
	<div class="wrapper">
		<PostFormInput
			 v-model="formData"
		/>
		<v-btn @click="create">Создать</v-btn>
		<v-card
			 class="post"
			 v-for="post in postStore.posts"
			 :key="post.id"
		>
			<v-card-title>{{post.title}}</v-card-title>
			<v-card-text>{{post.content}}</v-card-text>
		</v-card>
	</div>



</template>

<script setup>

const formData = ref({
	title: "",
	content: ""
})


const postStore = usePosts()



watch(
	 () => postStore.posts,
	 (posts) => {
		 localStorage.setItem('posts', JSON.stringify(posts))
	 },
	 {deep: true}
)

onBeforeMount(() => {
	const postsJSON = localStorage.getItem('posts')
	if (postsJSON) {
		postStore.posts = JSON.parse(postsJSON)
	}
})








const updateFormData = (form) => {
	formData.value = form
}

const create = () => {
	postStore.add(formData.value)
}



</script>


<style lang="scss">

.wrapper {
	max-width: 1000px;
	width: 100%;
	margin: 20px auto;
}

.post {
	margin: 10px 0;
}

</style>
