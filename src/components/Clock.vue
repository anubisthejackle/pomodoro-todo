<template>
    <div class="clock text-center">
        <div class="clockFace">
            00:00
        </div>
        <div class="description pb-5 text-xl font-semibold leading-tight">
            <span v-if="stage == 1">
                <!-- Working -->
                <svg class="w-6 h-6 inline" xmlns="http://www.w3.org/2000/svg"><path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"/></svg>
                Time to work
            </span>
            <span v-if="stage == 2">
                <!-- Short Break -->
                <svg class="w-6 h-6 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 11H2a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h2V1h14v10a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4zm0-2V5H2v4h2zm-2 8v-1h18v1l-4 2H6l-4-2z"/></svg>
                Taking a short break
            </span>
            <span v-if="stage == 3">
                <!-- Long Break -->
                <svg class="w-6 h-6 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18 11v7a2 2 0 0 1-4 0v-5h-2V3a3 3 0 0 1 3-3h3v11zM4 10a2 2 0 0 1-2-2V1a1 1 0 0 1 2 0v4h1V1a1 1 0 0 1 2 0v4h1V1a1 1 0 0 1 2 0v7a2 2 0 0 1-2 2v8a2 2 0 0 1-4 0v-8z"/></svg>
                Taking a long break
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['stage']

}
</script>

<style scoped>
    .clock {
        background: #FFB5B5;
        text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.42);
    }

    .clockFace {
        font-family: digital-clock;
        font-size: 120px;
        line-height: 120px;
    }

    .description {

    }
</style>
