<template>
    <div
        v-on:click.stop.prevent="clicked"
        id="startButton"
        class="border w-2/3 shadow-lg mt-4 mb-4 h-full text-center rounded-full cursor-pointer"
        :class="{ disabled: runTimer}"
        >
        <span class="text-4xl"><slot></slot></span>
    </div>
</template>

<script>
export default {
    props:['runTimer'],
    methods: {
        clicked: function() {
            if(this.runTimer){
                // We don't let you click if the timer is running.
                return;
            }

            this.$emit('clicked');
        }
    }

}
</script>

<style scoped>
#startButton.disabled {
    background: #d4c4c4;
}
</style>
