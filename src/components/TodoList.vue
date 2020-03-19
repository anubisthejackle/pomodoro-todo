<template>
    <div id="todoList" class="scrollable overflow-y-scroll">
        <div class="flex justify-center">
            <div @click="addToDo = !addToDo" id="addButton" class="border w-5/12 shadow-lg mt-4 mb-4 h-full text-center rounded-full cursor-pointer">
                <span class="text-2xl">Add To-Do</span>
            </div>
        </div>
        <div class="ml-12 mr-12">
            <transition
                appear
                name="fade"
            >
                <AddItem v-if="addToDo" @add="addItem" />
            </transition>
            <TodoItem v-for="(item, index) in items" :key="index" v-show="!item.complete" @close="removeItem(index)">{{item.text}}</TodoItem>
        </div>
    </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue';
import AddItem from '@/components/AddTodoItem.vue';

export default {
    components: {
        TodoItem,
        AddItem,
    },
    data(){
        return {
            items:[],
            addToDo: false,
        };
    },
    methods: {
        removeItem: function(index){
            this.items[index].complete=true;
        },
        addItem: function(text){
            console.log(text);
            this.items.push({
                text:text,
                complete:false
            });
            this.addToDo = false;
        }
    }

}
</script>

<style scoped>
.scrollable::-webkit-scrollbar {
  width: 18px;
  height: 18px;
  z-index:999;
}
.scrollable::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
  z-index:999;
}
.scrollable::-webkit-scrollbar-thumb {
  background: #ff8787;
  border: 0px none #ffffff;
  border-radius: 50px;
  z-index:999;
}
.scrollable::-webkit-scrollbar-thumb:hover {
  background: #ff9b9b;
  z-index:999;
}
.scrollable::-webkit-scrollbar-thumb:active {
  background: #ff9b9b;
  z-index:999;
}
.scrollable::-webkit-scrollbar-track {
  background: #ffb5b5;
  border: 0px none #ffffff;
  border-radius: 50px;
  z-index:999;
}
.scrollable::-webkit-scrollbar-track:hover {
  background: #ffb5b5;
  z-index:999;
}
.scrollable::-webkit-scrollbar-track:active {
  background: #ffb5b5;
  z-index:999;
}
.scrollable::-webkit-scrollbar-corner {
  background: transparent;
  z-index:999;
}

#todoList {
    background: linear-gradient(180deg, #FFB5B5 0%, #FFD3D3 100%);
    min-height: 335px;
    max-height: 335px;
    font-family: 'BenchNine', sans-serif;
}

#todoList::before {
    content: ' ';
    display: block;
    position: absolute;
    height:100px;
    width:393px;
    background-image: linear-gradient(180deg, rgba(255, 203, 203, 0.3) 0%, #FFD3D3 100%);
    margin-top: calc(335px - 100px);
    z-index: 999;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
