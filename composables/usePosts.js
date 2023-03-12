import { defineStore } from "pinia";

export default defineStore('posts',() => {
	const posts = ref([])
	const postsTitles = computed(() => posts.value.map(i => i.title))
	const add = (post) => {
		posts.value.push(post)
	}

	return {
		posts,
		add,
		postsTitles
	}

})