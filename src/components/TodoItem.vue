<template>
    <transition
        appear
        name="fade"
        onBeforeLeave={beforeDestroy}
    >
        <div class="relative">
            <span class="relative bg-white border-black border border-solid w-6 h-6 inline-block">
                <svg v-show="checked" class="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
                <input v-on:change="changed" type="checkbox" class="cursor-pointer opacity-0 h-full w-full">
            </span>
            <span class="ml-1 text-3xl">
                <slot></slot>
            </span>
        </div>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            checked: false,
        }
    },
    methods: {
        changed: function(){
            this.checked = !this.checked;
            this.$emit('close');
        },
    },
    beforeDestroy: function(){
        console.log("Ran beforeDestroy");
    }

}
</script>

<style scoped>
    .stick-right {
        position: absolute;
        top: 16px;
        right: 0px;
    }
    .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
