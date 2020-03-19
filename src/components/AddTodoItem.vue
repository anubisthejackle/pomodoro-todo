<template>
    <div class="relative">
        <span class="relative bg-white border-black border border-solid w-6 h-6 inline-block">
            &nbsp;
        </span>
        <span @keydown.enter.prevent="submit" class="ml-1 text-3xl max-w-full border-b border-black outline-none" contenteditable>
            Enter your Todo Here
        </span>
    </div>
</template>

<script>
export default {
    methods: {
        submit: function(event) {
            this.$emit('add', event.target.innerText.trim())
        }
    }

}
</script>

<style>
</style>
