
<template>
	<v-text-field label="Заголовок" v-model="form.title"></v-text-field>
	<v-textarea label="Содержание поста" v-model="form.content"></v-textarea>
</template>

<script setup>
const props = defineProps({
	modelValue: {
		type: Object,
		required: true,
	}
})

const emit = defineEmits(['update:modelValue'])
const form = computed({
	get() {
		return props.modelValue
	},

	set(val) {
		emit('update:modelValue', val)
	}
})





</script>