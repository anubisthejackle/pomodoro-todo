<template>
    <div class="relative">
        <span class="relative bg-white border-black border border-solid w-6 h-6 inline-block">
            &nbsp;
        </span>
        <span @click="clearName" @blur="cancelNew" @keydown.enter.prevent="submit" class="ml-1 text-3xl max-w-full border-b border-black outline-none" contenteditable>
            Enter your Todo Here
        </span>
    </div>
</template>

<script>
export default {
    methods: {
        submit: function(event) {
            this.$emit('add', event.target.innerText.trim())
        },
        clearName: function(event) {
            if( event.target.innerText == ' Enter your Todo Here'){
                event.target.innerText = "";
            }
        },
        cancelNew: function(event){
            if( event.target.innerText.trim() == '' ){
                this.$emit('cancel');
            }
        }
    }

}
</script>

<style>
</style>
