<template>
    <div
        v-on:click.stop.prevent="clicked"
        id="startButton"
        class="border w-2/3 shadow-lg mt-4 mb-4 h-full text-center rounded-full cursor-pointer"
        >
        <span class="text-4xl"><slot></slot></span>
    </div>
</template>

<script>
export default {
    methods: {
        clicked: function() {
            this.$emit('clicked');
        }
    }

}
</script>

<style>
</style>
