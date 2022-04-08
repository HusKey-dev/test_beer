<template>
    <div class="main">
        <router-view v-slot="{ Component }">
            <transition>
                <component :is="Component"></component>
            </transition>
        </router-view>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: all 1s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    transform: translateX(-100%);
}
</style>